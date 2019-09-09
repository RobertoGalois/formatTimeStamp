function formatDateTime(pValue) {
	pValue = parseInt(pValue);

	if (pValue < 10) {
		return ('0' + pValue);
	}

	return (pValue);
}

function formatTimeStamp(pTimestamp) {
	let date = new Date(pTimestamp);
	let retStr = 'le ' + 	formatDateTime(date.getDate()) + '/' +
							formatDateTime(date.getMonth() + 1) + '/' +
							formatDateTime(date.getFullYear()) + ' à ' +
							formatDateTime(date.getHours()) + 'h' +
							formatDateTime(date.getMinutes());

	return retStr;
}
