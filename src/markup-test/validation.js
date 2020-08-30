export function validateForm(payload) {
	let error = {isFormValid: true};

	// assume we only have required rule
	for (let i in payload) {
		if (!payload[i].value) {
			let newError = {};
			newError.valid = false;
			newError.field = payload[i].field;
			newError.message = '* Required Field'

			error[payload[i].field] = newError;

			error.isFormValid = false;
		}
	}

	return error;
}