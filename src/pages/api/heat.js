import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { envInfo, getDate, getMonth, getYear } from '../../utils';
import moment from 'moment/moment';
import { MsgError, MsgOK, MsgOKWithData } from '@/utils/ResponseMessage';

const options = new Options();
options.addArguments('--headless');

let apiError;
const timer = ms => new Promise(res => setTimeout(res, ms));
let driver;

const { baseUrl, email, password } = envInfo;

async function handleLogin() {
	try {
		await driver.get(`${baseUrl}/login`);
		await driver.wait(until.elementLocated(By.name('email'))).sendKeys(email);
		await driver.findElement(By.name('password')).sendKeys(password, Key.ENTER);
		await driver.wait(
			until.elementLocated(By.className('react-datepicker-wrapper')),
			6000
		);
		await timer(1000);
		return MsgOK;
	} catch (error) {
		driver.quit();
		return MsgError('Login failed');
	}
}

async function selectProject(projectName) {
	try {
		const els = await driver.findElement(
			By.xpath(
				`//div[contains(@class,'HeatMapProjects__Item') and .//text()='${projectName}']`
			)
		);
		if (!els) {
			apiError = `Cannot select project: ${projectName}. Please try again`;
		}
		await els.click();
	} catch (error) {
		apiError = `Cannot select project: ${projectName}. Please try again`;
	}
}

async function selectDate(date) {
	if (date.length !== 8 || !moment(date).isValid()) {
		apiError = `${date} - This date is invalid.`;
		return;
	}
	try {
		const button = await driver.findElement(
			By.xpath(`//button[contains(@class,'ButtonLayout__Button')]`)
		);
		await button.click();
		await driver.findElement(By.className('react-datepicker__month-container'));
		await driver
			.findElement(By.css(`select>option[value="${getMonth(date)}"]`))
			.click();
		await driver
			.findElement(By.css(`select>option[value="${getYear(date)}"]`))
			.click();

		const daySelector = await driver.findElement(
			By.xpath(
				`//div[contains(@class,'react-datepicker__day--0${getDate(
					date
				)}') and not(contains(@class,'react-datepicker__day--outside-month'))]`
			)
		);
		await daySelector.click();
	} catch (error) {
		apiError = `Cannot set Select date: ${date}. Please try again`;
	}
}

async function setTaskContent(taskContent, hourTask) {
	try {
		const content = await driver.findElement(By.css('textarea'));
		await content.clear();
		await content.sendKeys(taskContent);

		const hour = await driver.findElement(By.css('input[type=number'));
		await hour.clear();
		await hour.sendKeys(hourTask);
	} catch (error) {
		apiError = `Cannot set Task content. Please try again`;
	}
}

async function postAction() {
	const button = await driver.findElement(
		By.xpath(
			`//button[contains(@class,'ButtonLayout__Button') and .//text()='Post']`
		)
	);
	// await button.click()
}

async function takeScreenshot() {
	const image = await driver.takeScreenshot();
	return image;
}

function logger(item) {
	const date = moment(item.date).format('YYYY-MM-DD');
	return `👏 DONE 👏 ${item.project} / ${date} / ${item.hour}h`;
}

async function main(data) {
	if (!data || !data.length) {
		return [];
	}
	const res = await handleLogin();
	if (res.error) {
		return res;
	}
	const result = [];
	for (let i = 0; i < data.length; i++) {
		const heatItem = data[i];
		const { project, date, content, hour } = heatItem;

		if (!apiError) await selectProject(project);
		if (!apiError) await selectDate(date);
		if (!apiError) await setTaskContent(content, hour);
		if (!apiError) await postAction();

		if (apiError) {
			driver.quit();
			return MsgError(apiError);
		}

		const title = logger(heatItem);
		const image = await takeScreenshot(date);
		result.push({
			title,
			image,
		});
		await timer(1000);
	}

	driver.quit();
	return MsgOKWithData(result);
}

export default async function handler(req, res) {
	apiError = '';
	driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
	const result = await main(req.body);
	res.status(200).json(result);
}
