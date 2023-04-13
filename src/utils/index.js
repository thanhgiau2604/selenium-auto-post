export const getYear = (date) => date.substring(0, 4);

export const getMonth = (date) => (Number(date.substring(4,6)) - 1).toString();

export const getDate = (date) => date.substring(6,8);

export const envInfo = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    baseUrl: process.env.BASE_URL,
}

export const data = [
    {
        project: "25-Self Research",
        date: "20230412",
        content: "Research vuejs",
        hour: 8
    }
]