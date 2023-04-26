import React from 'react';
import { FastField, getIn } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { validateRequired } from '@/utils/ValidateFunc';

export const InputHour = props => {
	const name = props.name || 'hour';
	return (
		<FastField name={name} validate={validateRequired}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
					w={100}
					flexShrink={0}
				>
					<Input
						{...field}
						type='number'
						placeholder='Hour'
						max={8}
						min={1}
						value={field.value || ''}
					/>
					<FormErrorMessage>{getIn(form.errors, name)}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
