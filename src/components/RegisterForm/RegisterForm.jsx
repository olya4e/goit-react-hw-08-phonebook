import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Username</label>
      <input
        className={css.input}
        type="text"
        name="name"
        required
        placeholder="Enter name"
      />
      <label className={css.label}>Email</label>{' '}
      <input
        className={css.input}
        type="email"
        name="email"
        required
        placeholder="Enter email"
      />
      <label className={css.label}>Password</label>{' '}
      <input
        className={css.input}
        type="password"
        name="password"
        required
        placeholder="Enter password"
      />
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
