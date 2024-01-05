import { AppLayout } from './AppLayout';
import { useState, useRef } from 'react';

const sendForm = (formData) => {
	console.log(formData);
};

export const App = () => {
	const [email, setEmail] = useState('');
	const [errorEmail, setEmailError] = useState('');
	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [replayPassword, setReplayPassword] = useState('');
	const [errorReplayPassword, setErrorReplayPassword] = useState('');

	const submitButtonRef = useRef(null);

	const onEmailBlur = (e) => {
		setEmail(e.target.value);
		if (
			!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
				String(e.target.value),
			)
		) {
			setEmailError('Неверный адрес почты');
		} else {
			setEmailError(null);
		}
		console.log(e.target.name);
	};

	const onFocus = (e) => {
		if (e.target.name === 'email' && errorEmail) {
			setEmailError(null);
			setErrorPassword(null);
		} else if (e.target.name === 'password' && errorPassword) {
			setErrorPassword(null);
		}
	};

	const onPasswordBlur = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 11) {
			setErrorPassword('Пароль должен быть не короче 10 символов');
		} else {
			setErrorPassword(null);
		}
	};

	const onReplayPasswordChange = (e) => {
		setReplayPassword(e.target.value);
		if (e.target.value !== password) {
			setErrorReplayPassword('Введенные пароли должны совпадать');
		} else if (e.target.value === password) {
			setErrorReplayPassword(null);
			submitButtonRef.current.focus();
		}
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		sendForm({ email, password });
	};

	return (
		<AppLayout
			onSubmitForm={onSubmitForm}
			onEmailBlur={onEmailBlur}
			errorEmail={errorEmail}
			onPasswordBlur={onPasswordBlur}
			errorPassword={errorPassword}
			replayPassword={replayPassword}
			onReplayPasswordChange={onReplayPasswordChange}
			errorReplayPassword={errorReplayPassword}
			submitButtonRef={submitButtonRef}
			onFocus={onFocus}
		/>
	);
};
