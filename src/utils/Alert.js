import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const confirmNotify = (title, message, cfText, cancelText) => {
	return Swal.fire({
		title,
		html: message,
		allowOutsideClick: false,
		showConfirmButton: true,
		showCancelButton: true,
		focusCancel: true,
		showCloseButton: true,
		confirmButtonColor: '#0679dd',
		cancelButtonColor: '#a1a8ad',
		focusConfirm: false,
		confirmButtonText: cfText,
		cancelButtonText: cancelText,
		width: '100%',
		// color: Variables.colorBlack,
		padding: '1rem',
	});
};

export const confirmYesNo = (title, message) => {
	return confirmNotify(title, message, 'Yes', 'Cancel');
};
