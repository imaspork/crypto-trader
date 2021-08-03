const NumberConvert = (value) => {
	return value.toLocaleString(navigator.language, {
		minimumFractionDigits: 0,
	});
};

export default NumberConvert;
