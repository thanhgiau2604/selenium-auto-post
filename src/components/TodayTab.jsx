import React from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
} from '@chakra-ui/react';
import moment from 'moment/moment';

const TodayTab = () => {
	const todayStr = moment(new Date()).format('YYYY/MM/DD');
	return (
		<div className='today-tab'>
			<p className='today-date'>
				Today is: <span>{todayStr}</span>
			</p>
			<FormControl>
				<FormLabel>Task content:</FormLabel>
				<Input type='text' />
			</FormControl>
			<FormControl marginTop={3}>
				<FormLabel>Working hour:</FormLabel>
				<Input type='number' />
			</FormControl>
			<Button mt={4} colorScheme='teal' type='submit'>
				Submit
			</Button>
		</div>
	);
};

export default TodayTab;
