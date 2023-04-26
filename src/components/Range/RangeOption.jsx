import React from 'react';
import {
	Card,
	CardBody,
	Center,
	Box,
	RadioGroup,
	Stack,
	Radio,
} from '@chakra-ui/react';
import { DATE_OPTIONS } from '@/constants';

const RangeOption = ({ value, updateValue }) => {
	return (
		<Box mb={3}>
			<Center mb={2} fontWeight={700}>
				Select option:
			</Center>
			<Card>
				<CardBody>
					<RadioGroup value={value} onChange={updateValue}>
						<Stack direction='row' wrap gap={3}>
							<Radio value='all'>All</Radio>
							<Radio value={DATE_OPTIONS.except_weekend}>Except Weekend</Radio>
						</Stack>
					</RadioGroup>
				</CardBody>
			</Card>
		</Box>
	);
};

export default RangeOption;
