import React from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { PROJECTS } from '@/constants';
import { FastField } from 'formik';
import { Card, CardBody, RadioGroup, Stack, Radio } from '@chakra-ui/react';

export const SelectProject = props => {
	return (
		<FastField name={props.name || 'project'}>
			{({ field, form }) => (
				<FormControl
					maxW='700px'
					isInvalid={form.errors.name && form.touched.name}
				>
					<Card>
						<CardBody>
							<RadioGroup {...field}>
								<Stack direction='row' wrap>
									{PROJECTS.map(({ id, name }) => (
										<Radio {...field} value={name} key={id}>
											{name}
										</Radio>
									))}
								</Stack>
							</RadioGroup>
						</CardBody>
					</Card>
					<FormErrorMessage>{form.errors.name}</FormErrorMessage>
				</FormControl>
			)}
		</FastField>
	);
};
