import React from 'react';
import { FastField } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const DateInput = props => {
	return (
		<FastField name={props.name}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Input type='date' placeholder={props.placeholder} {...field} />
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
