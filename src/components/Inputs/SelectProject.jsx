import React from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { PROJECTS } from '@/constants';
import { FastField, getIn } from 'formik';
import { Card, CardBody, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { validateRequired } from '@/utils/ValidateFunc';

export const SelectProject = props => {
	const name = props.name || 'project';
	return (
		<FastField name={name} validate={validateRequired}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
				>
					<Card>
						<CardBody>
							<RadioGroup {...field}>
								<Stack direction='row' flexWrap='wrap' gap={2}>
									{PROJECTS.map(({ id, name }) => (
										<Radio
											{...field}
											value={name}
											key={id}
											margin='0!important'
										>
											{name}
										</Radio>
									))}
								</Stack>
							</RadioGroup>
						</CardBody>
					</Card>
					<FormErrorMessage>{getIn(form.errors, name)}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
