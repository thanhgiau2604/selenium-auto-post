import React from 'react';
import { FormControl, FormErrorMessage, Select } from '@chakra-ui/react';
import { PROJECTS } from '@/constants/index';
import { FastField } from 'formik';

export const SelectProject = () => {
	return (
		<FastField name='project'>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Select placeholder='Select a project' {...field}>
						{PROJECTS.map(({ id, name }) => (
							<option value={name} key={id}>
								{name}
							</option>
						))}
					</Select>
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
