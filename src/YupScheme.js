import * as yup from 'yup';
import { ERRORS } from './Constants';

export const fieldScheme = yup.object().shape({
	email: yup
		.string()
		.required(ERRORS.requiredError)
		.matches(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
			ERRORS.errorEmail,
		),

	password: yup
		.string()
		.required(ERRORS.requiredError)
		.min(8, ERRORS.errorPasswordMin)
		.max(20, ERRORS.errorPasswordMax),

	replayPassword: yup
		.string()
		.required(ERRORS.requiredError)
		.test('password-match', ERRORS.errorReplayPassword, function (value) {
			return this.parent.password === value;
		}),
});
