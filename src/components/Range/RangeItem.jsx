import React from 'react';
import { Flex, Box, Tag, TagLabel } from '@chakra-ui/react';
import { ArrowDownIcon, NotAllowedIcon, UpDownIcon } from '@chakra-ui/icons';
import { InputContent, InputHour, SelectProjectV2 } from '../Inputs';
import { useFormikContext } from 'formik';
import { DEFAULT_DATA } from '@/constants';
import { Tooltip } from 'react-tooltip';
import { confirmYesNo } from '@/utils/Alert';

const RangeItem = ({ index, date }) => {
	const { values, setFieldValue } = useFormikContext();

	const handleDuplicateData = () => {
		const newData = [...values.data];
		newData[index] = { ...newData[index - 1] };
		setFieldValue('data', newData);
	};

	const handleClearData = () => {
		const newData = [...values.data];
		newData[index] = { ...DEFAULT_DATA };
		setFieldValue('data', newData);
	};

	const handleFillAll = async () => {
		const result = await confirmYesNo(
			'Are you sure you want to fill all the data with this data?',
			''
		);
		if (result.isConfirmed) {
			const newData = [...values.data].map(item => ({
				...values.data[index],
				date: item.date,
			}));
			setFieldValue('data', newData);
		}
	};

	return (
		<Box mt={4}>
			{date && (
				<Tag mb={2} colorScheme='red' borderRadius='full'>
					<TagLabel>{date}</TagLabel>
				</Tag>
			)}
			<Flex justifyContent='space-between' alignItems='center'>
				<Flex gap={2} flexBasis='90%'>
					<InputContent name={`data[${index}].content`} />
					<InputHour name={`data[${index}].hour`} />
					<SelectProjectV2 name={`data[${index}].project`} />
				</Flex>
				<Flex gap={2} alignItems='center'>
					{index !== 0 && (
						<ArrowDownIcon
							onClick={handleDuplicateData}
							cursor='pointer'
							data-tooltip-id='duplicate-data'
							data-tooltip-content='Fill data by previous date'
							outline='none'
						/>
					)}
					<NotAllowedIcon
						onClick={handleClearData}
						cursor='pointer'
						data-tooltip-id='clear-data'
						data-tooltip-content='Clear & set default values'
						outline='none'
					/>
					<UpDownIcon
						cursor='pointer'
						data-tooltip-id='fill-all'
						data-tooltip-content='Fill all with this'
						outline='none'
						onClick={handleFillAll}
					/>
				</Flex>
			</Flex>
			<Tooltip id='duplicate-data' />
			<Tooltip id='clear-data' />
			<Tooltip id='fill-all' />
		</Box>
	);
};

export default RangeItem;
