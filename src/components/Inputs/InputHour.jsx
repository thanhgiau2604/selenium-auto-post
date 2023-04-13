import React from 'react';
import { FastField } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const InputHour = () => {
	return (
		<FastField name='hour'>
			{({ field, form }) => (
				<FormControl
					mt={4}
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Input type='number' placeholder='Working hour' {...field} />
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
