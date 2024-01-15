import * as yup from 'yup';
import { ERRORS } from './Constants';
// import { yupResolver } from '@hookform/resolvers/yup';

export const fieldScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
			ERRORS.errorEmail,
		),

	password: yup.string().min(8, ERRORS.errorPasswordMin).max(20, ERRORS.errorPasswordMax),
});
