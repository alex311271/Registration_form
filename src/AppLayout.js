import styles from './App.module.css';

export const AppLayout = ({
	emailError,
	passwordError,
	replayPasswordError,
	register,
	handleSubmit,
	sendForm,
	submitButtonRef,
}) => (
	<div className={styles.App_header}>
		<form className={styles.form} onSubmit={handleSubmit(sendForm)} noValidate>
			<input
				className={styles.field}
				type="email"
				name="email"
				placeholder="Введите адрес почты"
				{...register('email')}
			></input>
			{emailError && <div className={styles.error}>{emailError}</div>}
			<input
				className={styles.field}
				type="password"
				name="password"
				placeholder="Введите пароль"
				{...register('password')}
			></input>
			{passwordError && <div className={styles.error}>{passwordError}</div>}
			<input
				className={styles.field}
				type="password"
				name="replayPassword"
				placeholder="Повторите пароль"
				{...register('replayPassword')}
			></input>
			{replayPasswordError && <div className={styles.error}>{replayPasswordError}</div>}
			<button
				ref={submitButtonRef}
				type="submit"
				name="submit"
				disabled={emailError || passwordError || replayPasswordError}
			>
				Отправить
			</button>
		</form>
	</div>
);
