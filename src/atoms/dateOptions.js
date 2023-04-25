import { atom } from 'recoil';
import { selector } from 'recoil';

export const dateOptionsState = atom({
	key: 'dateOptionState',
	default: 'all',
});

export const getDateOption = selector({
	key: 'getDateOption',
	get: ({ get }) => {
		const option = get(dateOptionsState);
		return option;
	},
});
