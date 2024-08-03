import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const userData = { 
             name: form.elements.name.value,
             email: form.elements.email.value,
             password: form.elements.password.value,
        };
        console.log('Submitting registration form with data:', userData) ;
        dispatch(register(userData));
        form.reset();      
    };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
            <p className={css.labelText}>User Name</p>
            <input
                className={css.input}
                type="text"
                name="name"
                required
            />
        </label>
        <label className={css.label}>
            <p className={css.labelText}>Email</p>
            <input
                className={css.input}
                type="email"
                name="email"
                required
            />
        </label>
        <label className={css.label}>
            <p className={css.labelText}>Password</p>
            <input
                className={css.input}
                type="password"
                name="password"
                required
            />
        </label>
        <button className={css.button} type="submit">Register</button>
    </form>
  );
};
