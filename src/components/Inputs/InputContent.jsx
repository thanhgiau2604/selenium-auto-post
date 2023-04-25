import React from 'react';
import { FastField } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const InputContent = props => {
	return (
		<FastField name={props.name || 'content'}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Input
						type='text'
						placeholder='Task content'
						{...field}
						value={field.value || ''}
					/>
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
