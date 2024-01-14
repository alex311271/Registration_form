import { AppLayout } from './AppLayout';
import { useState, useRef } from 'react';
import { ERRORS } from './Constants';

const sendForm = (formData) => {
	console.log(`Email:${formData.email}  Password:${formData.password}`);
};

export const App = () => {
	const [formData, setFormData] = useState({
		email: null,
		password: null,
		errorEmail: null,
		errorPassword: null,
		errorReplayPassword: null,
	});

	const submitButtonRef = useRef(null);

	const onChangeField = (e) => {
		if (e.target.name === 'email') {
			setFormData({ ...formData, email: e.target.value });
		} else if (e.target.name === 'password') {
			if (e.target.value.length > 20) {
				setFormData({ ...formData, errorPassword: ERRORS.errorPasswordMax });
			} else {
				setFormData({ ...formData, errorPassword: null });
			}
			setFormData({ ...formData, password: e.target.value });
		} else if (e.target.name === 'replayPassword') {
			if (e.target.value === formData.password) {
				setFormData({ ...formData, replayPassword: e.target.value });
				submitButtonRef.current.focus();
			}
		}
	};

	const onFocus = (e) => {
		if (e.target.name === 'email' && formData.errorEmail) {
			setFormData({ ...formData, errorEmail: null, errorPassword: null });
		} else if (e.target.name === 'password') {
			setFormData({ ...formData, errorPassword: null, errorReplayPassword: null });
		} else if (e.target.name === 'replayPassword' && formData.errorReplayPassword) {
			setFormData({ ...formData, errorReplayPassword: null });
		}
	};

	const onCheckErrorsBlur = (e) => {
		if (e.target.name === 'email') {
			if (
				!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
					String(e.target.value),
				)
			) {
				setFormData({ ...formData, errorEmail: ERRORS.errorEmail });
			} else {
				setFormData({ ...formData, errorEmail: null });
			}
		} else if (e.target.name === 'password') {
			if (e.target.value.length < 8) {
				setFormData({ ...formData, errorPassword: ERRORS.errorPasswordMin });
			} else {
				setFormData({ ...formData, errorPassword: null });
			}
		} else if (e.target.name === 'replayPassword') {
			if (e.target.value !== formData.password) {
				setFormData({ ...formData, errorReplayPassword: ERRORS.errorReplayPassword });
			} else {
				setFormData({ ...formData, errorReplayPassword: null });
			}
		}
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		sendForm(formData);
	};

	return (
		<AppLayout
			formData={formData}
			onSubmitForm={onSubmitForm}
			onCheckErrorsBlur={onCheckErrorsBlur}
			submitButtonRef={submitButtonRef}
			onFocus={onFocus}
			onChangeField={onChangeField}
		/>
	);
};
