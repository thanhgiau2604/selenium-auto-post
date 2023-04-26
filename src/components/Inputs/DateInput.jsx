import React from 'react';
import { FastField, getIn, useFormikContext } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const DateInput = props => {
	const { name, validate } = props;
	const { values } = useFormikContext();
	return (
		<FastField name={name} validate={value => validate(value, values)}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
				>
					<Input type='date' placeholder={props.placeholder} {...field} />
					<FormErrorMessage>{getIn(form.errors, name)}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
