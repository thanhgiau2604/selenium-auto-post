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

const RangeOption = () => {
	return (
		<Box mb={3}>
			<Center mb={2} fontWeight={700}>
				Select option (required):
			</Center>
			<Card>
				<CardBody>
					<RadioGroup>
						<Stack direction='row' wrap gap={3}>
							<Radio value='all'>All</Radio>
							<Radio value='except_fr_sa'>Except Fri - Sat</Radio>
						</Stack>
					</RadioGroup>
				</CardBody>
			</Card>
		</Box>
	);
};

export default RangeOption;
