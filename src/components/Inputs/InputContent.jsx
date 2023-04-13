import React from 'react';
import { FastField } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const InputContent = () => {
	return (
		<FastField name='content'>
			{({ field, form }) => (
				<FormControl
					mt={4}
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Input type='text' placeholder='Task content' {...field} />
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
