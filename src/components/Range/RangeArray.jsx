/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { getListDate } from '@/utils/index';
import RangeItem from './RangeItem';
import { DATE_OPTIONS, DEFAULT_PROJECT } from '@/constants';
import { useRecoilValue } from 'recoil';
import { dateOptionsState } from 'src/atoms/dateOptions';

const RangeArray = () => {
	const { values, setFieldValue } = useFormikContext();
	const option = useRecoilValue(dateOptionsState);
	const listDate = getListDate(
		values.start_date,
		values.end_date,
		option === DATE_OPTIONS.except_weekend
	);

	useEffect(() => {
		const dataValues = listDate.map(d => ({
			date: d,
			content: '',
			hour: 8,
			project: DEFAULT_PROJECT,
		}));
		setFieldValue('data', dataValues);
	}, [values.start_date, values.end_date, option]);

	return (
		<FieldArray
			name='data'
			render={() => (
				<>
					{listDate.map((d, index) => (
						<RangeItem key={d} index={index} date={d} />
					))}
				</>
			)}
		></FieldArray>
	);
};

export default RangeArray;
