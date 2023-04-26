import moment from 'moment/moment';

export function validateRequired(value) {
	let error;
	if (!value) {
		error = 'Required field';
	}
	return error;
}

export function validateEndDate(value, values) {
	let error;
	if (!values.start_date || !value) {
		return error;
	}
	if (moment(values.start_date).isAfter(value)) {
		error = 'End date must be after start date';
	}
	return error;
}
