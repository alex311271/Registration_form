import { AppLayout } from './AppLayout';
import { useState } from 'react';

const sendForm = (formData) => {
	console.log(formData);
};

// export const handleChange=(e)=>{
// 	let input
// 	input[e.target.value]=e.target.value
// };

export const App = () => {
	const [email, setEmail] = useState(null);
	const [errorEmail, setEmailError] = useState(null);
	const [password, setPassword] = useState(null);
	const [errorPassword, setErrorPassword] = useState(null);
	const [replayPassword, setReplayPassword] = useState(null);
	const [errorReplayPassword, setErrorReplayPassword] = useState(null);

	const sendForm = (formData) => {
		console.log(formData)
	};

	const onEmailBlur = (e) => {
		setEmail(e.target.value);
		if (
			!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
				String(e.target.value),
			)
		) {
			setEmailError('Неверный адрес почты');
		}
	};
	const onPasswordBlur = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 11) {
			setErrorPassword('Пароль должен быть не короче 10 символов');
		}
	};

	const onReplayPasswordChange = (e) => {
		setReplayPassword(e.target.value);
		if (e.target.value !== password) {
			setErrorReplayPassword('Введенные пароли не совпадают');
		} else {
			setErrorReplayPassword(null);
		}
	};

	const onFocus = (e) => {
		if (e.target.name === 'email') {
			setEmailError(null);
			setErrorPassword(null);
		} else if (e.target.name === 'password') {
			setErrorPassword(null);
			setReplayPassword(null);
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
			onFocus={onFocus}
			onPasswordBlur={onPasswordBlur}
			errorPassword={errorPassword}
			replayPassword={replayPassword}
			onReplayPasswordChange={onReplayPasswordChange}
			errorReplayPassword={errorReplayPassword}
		/>
	);
};
