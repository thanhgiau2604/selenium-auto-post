import React from 'react';
import { Flex, Box, Tag, TagLabel } from '@chakra-ui/react';
import { ArrowDownIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { InputContent, InputHour, SelectProjectV2 } from '../Inputs';
import { formatDate } from '@/utils/index';

const RangeItem = ({ index, date }) => {
	return (
		<Box mt={4}>
			{date && (
				<Tag mb={2} colorScheme='red' borderRadius='full'>
					<TagLabel>{formatDate(date)}</TagLabel>
				</Tag>
			)}
			<Flex justifyContent='space-between' alignItems='center'>
				<Flex gap={2} flexBasis='90%'>
					<InputContent name={`data[${index}].content`} />
					<InputHour name={`data[${index}].hour`} />
					<SelectProjectV2 name={`data[${index}].project`} />
				</Flex>
				<Flex gap={2} alignItems='center'>
					<ArrowDownIcon />
					<NotAllowedIcon />
				</Flex>
			</Flex>
		</Box>
	);
};

export default RangeItem;
