import React from 'react';
import { FastField, getIn } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { validateRequired } from '@/utils/ValidateFunc';

export const InputContent = props => {
	const name = props.name || 'content';
	return (
		<FastField name={name} validate={validateRequired}>
			{({ field, form }) => {
				return (
					<FormControl
						maxW='700px'
						isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
					>
						<Input
							type='text'
							placeholder='Task content'
							{...field}
							value={field.value || ''}
						/>
						<FormErrorMessage>{getIn(form.errors, name)}</FormErrorMessage>
					</FormControl>
				);
			}}
		</FastField>
	);
};
