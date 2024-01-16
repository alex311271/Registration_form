import { AppLayout } from './AppLayout';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {fieldScheme} from './YupScheme';
import { useRef, useEffect } from 'react';

const sendForm = (formData) => {
	console.log(`Email:${formData.email}  Password:${formData.password}`);
};

export const App = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState:{errors}
	}=useForm({
		defaultValues:{
			email: null,
			password: null,
			replayPassword: null,
		},
		resolver: yupResolver(fieldScheme),
	});

	const submitButtonRef = useRef(null);

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const replayPasswordError = errors.replayPassword?.message;
	useEffect(()=>{
		if(watch('replayPassword')===watch('password') && watch('replayPassword')){
			submitButtonRef.current.focus();
		}
	})


	return (
		<AppLayout
			emailError={emailError}
			passwordError={passwordError}
			replayPasswordError={replayPasswordError}
			register={register}
			handleSubmit={handleSubmit}
			sendForm={sendForm}
			submitButtonRef={submitButtonRef}
		/>
	);
};
