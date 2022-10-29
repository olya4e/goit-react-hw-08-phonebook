import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>Email</label>
      <input
        className={css.input}
        type="email"
        name="email"
        required
        placeholder="Enter email"
      />
      <label className={css.label}>Password</label>
      <input
        className={css.input}
        type="password"
        name="password"
        required
        placeholder="Enter password"
      />
      <button className={css.button} type="submit">
        Log in
      </button>
    </form>
  );
};
