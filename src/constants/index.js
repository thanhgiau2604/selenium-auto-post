import { getTodayValue } from '../utils';

export const TODAY_INITIAL = {
	project: '',
	date: getTodayValue(),
	hour: 8,
	content: '',
};

export const DEFAULT_PROJECT = 'project 1';

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
	{ id: 1, name: 'project 1' },
	{ id: 2, name: 'project 2' },
	{ id: 3, name: 'project 3' },
	{ id: 4, name: 'project 4' },
	{ id: 5, name: 'project 5' },
];

export const DATE_OPTIONS = {
	all: 'all',
	except_weekend: 'except_weekend',
};
