export const MsgOK = {
	message: 'ok',
};

export const MsgOKWithData = data => ({
	message: 'ok',
	data,
});

export const MsgError = msg => ({
	error: true,
	message: msg,
});
