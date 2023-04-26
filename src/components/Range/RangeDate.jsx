import React from 'react';
import { Card, CardBody, Stack, Center, Box } from '@chakra-ui/react';
import { DateInput } from '../Inputs';
import { validateEndDate, validateRequired } from '@/utils/ValidateFunc';

const RangeDate = () => {
	return (
		<Box mt={2}>
			<Center mb={2} fontWeight={700}>
				Select range date:
			</Center>
			<Card>
				<CardBody>
					<Stack direction='row'>
						<DateInput
							name='start_date'
							placeholder='Enter start date'
							validate={validateRequired}
						/>
						<DateInput
							name='end_date'
							placeholder='Enter end date'
							validate={validateEndDate}
						/>
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
};

export default RangeDate;
