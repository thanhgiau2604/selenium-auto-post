import moment from 'moment/moment';

export * from './Alert';

export const getYear = date => date.substring(0, 4);

export const getMonth = date => (Number(date.substring(4, 6)) - 1).toString();

export const getDate = date => date.substring(6, 8);

export const envInfo = {
	email: process.env.EMAIL,
	password: process.env.PASSWORD,
	baseUrl: process.env.BASE_URL,
};

export const data = [
	{
		project: 'Gimic - CML',
		date: '20230403',
		content: 'Review and fix bugs',
		hour: 4,
	},
	{
		project: '25-Self Research',
		date: '20230403',
		content: 'Research vuejs',
		hour: 4,
	},
];

export const getTodayValue = () => moment(new Date()).format('YYYYMMDD');

export const formatDate = date => moment(date).format('ddd, DD/MM/YYYY');
export const formatDate2 = date => moment(date).format('yy-MM-DD');

export const getListDate = (start, end, isExceptWeekend) => {
	if (!start || !end) return [];
	const dates = [];
	for (var m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
		if (isExceptWeekend && isWeekendDate(m)) {
			continue;
		} else {
			dates.push(formatDate(m));
		}
	}
	return dates;
};

export const isWeekendDate = day => {
	return moment(day).isoWeekday() >= 6;
};
