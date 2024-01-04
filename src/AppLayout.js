
import styles from './App.module.css';

export const AppLayout = ({
	errorEmail,
	email,
	onSubmitForm,
	onEmailBlur,
	password,
	onFocus,
	errorPassword,
	onPasswordBlur,
	replayPassword,
	errorReplayPassword,
	onReplayPasswordChange,
}) => (
	<div className={styles.App_header}>
		<form className={styles.form} onSubmit={onSubmitForm}>
			<input
				className={styles.field}
				type="email"
				name="email"
				value={email}
				placeholder="Введите адрес почты"
				// onChange={handleChange}
				onBlur={onEmailBlur}
				onFocus={onFocus}
			></input>
			{errorEmail && <div className={styles.error}>{errorEmail}</div>}
			<input
				className={styles.field}
				type="password"
				name="password"
				value={password}
				placeholder="Введите пароль"
				onBlur={onPasswordBlur}
				onFocus={onFocus}
			></input>
			<div className={styles.error}>{errorPassword}</div>
			<input
				className={styles.field}
				type="password"
				name="replayPassword"
				value={replayPassword}
				placeholder="Повторите пароль"
				onChange={onReplayPasswordChange}
				onFocus={onFocus}
			></input>
			<div className={styles.error}>{errorReplayPassword}</div>
			<button type="submit" name='submit' disabled={!replayPassword || errorReplayPassword}>
				Отправить
			</button>
		</form>
	</div>
);
