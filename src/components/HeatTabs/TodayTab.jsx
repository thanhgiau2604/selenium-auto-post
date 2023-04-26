/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	Stack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { TODAY_INITIAL } from '@/constants';
import { Form, Formik } from 'formik';
import { SelectProject, InputContent, InputHour } from '@/components/Inputs';
import { usePost } from 'src/api';

const TodayTab = () => {
	const todayStr = moment(new Date()).format('YYYY/MM/DD');
	const { postAction, data } = usePost();
	const dataResult = data?.data;
	return (
		<div className='today-tab'>
			<p className='today-date'>
				Today is: <span>{todayStr}</span>
			</p>
			<Formik
				initialValues={TODAY_INITIAL}
				onSubmit={async (values, actions) => {
					await postAction([values]);
					actions.setSubmitting(false);
				}}
			>
				{({ isSubmitting, errors }) => {
					return (
						<Form>
							<Stack gap={2}>
								<SelectProject />
								<InputContent />
								<InputHour />
							</Stack>

							<Button
								mt={4}
								colorScheme='teal'
								type='submit'
								isLoading={isSubmitting}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
			{data?.error && (
				<Alert status='error' mt={5} borderRadius={7}>
					<AlertIcon />
					<AlertTitle>{data?.message}</AlertTitle>
				</Alert>
			)}
			{dataResult &&
				dataResult.map((item, index) => {
					return (
						<Box key={index.toString()} mt={5}>
							<p>{item.title}</p>
							<img
								src={`data:image/jpeg;base64, ${item.image}`}
								style={{ marginTop: '15px' }}
								alt='image'
								width='100%'
							/>
						</Box>
					);
				})}
		</div>
	);
};

export default TodayTab;
