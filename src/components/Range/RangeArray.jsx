/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { getListDate } from '@/utils/index';
import RangeItem from './RangeItem';
import { DEFAULT_PROJECT } from '@/constants';

const RangeArray = () => {
	const { values, setFieldValue } = useFormikContext();
	const listDate = getListDate(values.start_date, values.end_date);

	useEffect(() => {
		const dataValues = listDate.map(d => ({
			content: '',
			hour: 8,
			project: DEFAULT_PROJECT,
		}));
		setFieldValue('data', dataValues);
	}, [values.start_date, values.end_date]);

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
