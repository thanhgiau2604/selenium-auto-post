import React from 'react';
import { FastField } from 'formik';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const InputHour = props => {
	return (
		<FastField name={props.name || 'hour'}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
					w={100}
					flexShrink={0}
				>
					<Input
						type='number'
						placeholder='Hour'
						{...field}
						max={8}
						min={1}
						value={field.value || ''}
					/>
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
