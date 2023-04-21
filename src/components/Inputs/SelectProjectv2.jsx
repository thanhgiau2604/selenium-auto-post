import React from 'react';
import { FormControl, FormErrorMessage, Select } from '@chakra-ui/react';
import { PROJECTS } from '@/constants';
import { FastField } from 'formik';

export const SelectProjectV2 = props => {
	return (
		<FastField name={props.name || 'project'}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
					maxWidth={200}
				>
					<Select {...field}>
						{PROJECTS.map(item => (
							<option key={item.id} value={item.name}>
								{item.name}
							</option>
						))}
					</Select>
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
