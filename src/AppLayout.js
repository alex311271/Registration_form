import styles from './App.module.css';

export const AppLayout = ({
	email,
	onSubmitForm,
	password,
	onCheckErrorsBlur,
	replayPassword,
	submitButtonRef,
	onFocus,
	formData,
	onChangeField,
}) => (
	<div className={styles.App_header}>
		<form className={styles.form} onSubmit={onSubmitForm}>
			<input
				className={styles.field}
				type="email"
				name="email"
				value={email}
				placeholder="Введите адрес почты"
				onBlur={onCheckErrorsBlur}
				onFocus={onFocus}
				onChange={onChangeField}
			></input>
			{formData.errorEmail && <div className={styles.error}>{formData.errorEmail}</div>}
			<input
				className={styles.field}
				type="password"
				name="password"
				value={password}
				placeholder="Введите пароль"
				onBlur={onCheckErrorsBlur}
				onFocus={onFocus}
				onChange={onChangeField}
			></input>
			{formData.errorPassword && (
				<div className={styles.error}>{formData.errorPassword}</div>
			)}
			<input
				className={styles.field}
				type="password"
				name="replayPassword"
				value={replayPassword}
				placeholder="Повторите пароль"
				onChange={onChangeField}
				onBlur={onCheckErrorsBlur}
				onFocus={onFocus}
			></input>
			{formData.errorReplayPassword && (
				<div className={styles.error}>{formData.errorReplayPassword}</div>
			)}
			<button
				ref={submitButtonRef}
				type="submit"
				name="submit"
				disabled={
					formData.errorEmail ||
					!formData.email ||
					formData.errorPassword ||
					!formData.password ||
					formData.errorReplayPassword
				}
			>
				Отправить
			</button>
		</form>
	</div>
);
