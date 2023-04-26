import { getTodayValue } from '../utils';

export const TODAY_INITIAL = {
	project: '',
	date: getTodayValue(),
	hour: 8,
	content: '',
};

export const DEFAULT_PROJECT = '17-TE Website';

export const DEFAULT_DATA = {
	project: DEFAULT_PROJECT,
	date: '',
	hour: 8,
	content: '',
};

export const RANGE_INITIAL = {
	start_date: '',
	end_date: '',
	data: [{ ...DEFAULT_DATA }],
};

export const PROJECTS = [
	{ id: 1, name: '17-TE Website' },
	{ id: 2, name: '25-Self Research' },
	{ id: 3, name: '31-Mamacomi' },
	{ id: 4, name: '42-TE Research' },
	{ id: 5, name: '43-TE CrowdLoan' },
	{ id: 6, name: '44-TE Training' },
	{ id: 7, name: '45-TE Alarm' },
	{ id: 8, name: 'Otomo - GuideNavi' },
	{ id: 9, name: 'Gimic - PE' },
	{ id: 10, name: 'Gimic - SNS' },
	{ id: 11, name: 'Otomo - Wherever' },
	{ id: 12, name: 'Gimic - CML' },
];

export const DATE_OPTIONS = {
	all: 'all',
	except_weekend: 'except_weekend',
};
