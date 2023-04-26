import React from 'react';
import { FormControl, FormErrorMessage, Select } from '@chakra-ui/react';
import { PROJECTS } from '@/constants';
import { FastField, getIn } from 'formik';

export const SelectProjectV2 = props => {
	const name = props.name || 'project';
	return (
		<FastField name={name}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
					maxWidth={200}
				>
					<Select {...field}>
						{PROJECTS.map(item => (
							<option key={item.id} value={item.name}>
								{item.name}
							</option>
						))}
					</Select>
					<FormErrorMessage>{getIn(form.errors, name)}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
