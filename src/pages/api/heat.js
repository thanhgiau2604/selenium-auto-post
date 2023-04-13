import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { envInfo, getDate, getMonth, getYear, data } from "../../utils"
import moment from "moment/moment";

const options = new Options();
options.addArguments("--headless")

let success = true
const timer = ms => new Promise(res => setTimeout(res, ms))
let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

const { baseUrl, email, password } = envInfo

async function handleLogin() {
    await driver.get(`${baseUrl}/login`)
    await driver.wait(until.elementLocated(By.name('email'))).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(password, Key.ENTER);
    await driver.wait(until.elementLocated(By.className('react-datepicker-wrapper')));
    await timer(1000)
}

async function selectProject(projectName) {
    try {
        const els = await driver.findElement(By.xpath(`//div[contains(@class,'HeatMapProjects__Item') and .//text()='${projectName}']`));
        await els.click()
    } catch (error) {
        console.log(`Cannot select project: ${projectName}. Please try again`)
        success = false
    }
}

async function selectDate(date) {
    if (date.length !== 8 || !moment(date).isValid())  {
        console.log(`${date} - This date is invalid.`)
        success = false
        return
    }
    try {
        const button = await driver.findElement(By.xpath(`//button[contains(@class,'ButtonLayout__Button')]`));
        await button.click()
        await driver.findElement(By.className('react-datepicker__month-container'));
        await driver.findElement(By.css(`select>option[value="${getMonth(date)}"]`)).click();
        await driver.findElement(By.css(`select>option[value="${getYear(date)}"]`)).click();

        const daySelector = await driver.findElement(By.xpath(`//div[contains(@class,'react-datepicker__day--0${getDate(date)}') and not(contains(@class,'react-datepicker__day--outside-month'))]`));
        await daySelector.click()
    } catch (error) {
        console.log(`Cannot set Select date: ${date}. Please try again`)
        success = false
    }
    
}

async function setTaskContent(taskContent, hourTask) {
    try {
        const content = await driver.findElement(By.css("textarea"))
        await content.clear()
        await content.sendKeys(taskContent);

        const hour = await driver.findElement(By.css('input[type=number'))
        await hour.clear()
        await hour.sendKeys(hourTask);
    } catch (error) {
        console.log(`Cannot set Task content. Please try again`)
        success = false
    }   
}

async function postAction(){
    const button = await driver.findElement(By.xpath(`//button[contains(@class,'ButtonLayout__Button') and .//text()='Post']`));
    await button.click()
}

async function takeScreenshot() {
    const image = await driver.takeScreenshot()
    return image
}

function logger(item) {
    const date = moment(item.date).format("YYYY-MM-DD")
    return `👏 DONE 👏 ${item.project} / ${date} / ${item.hour}h`
}

async function main() {
    await handleLogin()
    const result = []
    for (let i = 0; i < data.length; i++) {
        const heatItem = data[i];
        const { project, date, content, hour } = heatItem

        if (success) await selectProject(project)
        if (success) await selectDate(date)
        if (success) await setTaskContent(content, hour)
        if (success) await postAction()
        
        if (!success) {
            driver.quit()
            return result
        }

        const title = logger(heatItem)
        const image = await takeScreenshot(date)
        result.push({
            title,
            image
        })
        await timer(1000)
    }

    driver.quit()
    return result
}

export default async function handler(req, res) {
    const result = await main()
    res.status(200).json({ result })
  }
  


