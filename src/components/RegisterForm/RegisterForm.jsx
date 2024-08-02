import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        
        const name = form.elements.name.value.trim();
        const email = form.elements.name.value.trim();
        const password = form.elements.name.value.trim();

        if (name && email && password) {
            dispatch(register({ name, email, password }));
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }        
    };

  return (
    <div className={css.regFormContainer}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={css.regForm}>
            <div className={css.regFormField}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={css.regFormInput}
                />
            </div>
            <div className={css.regFormField}>
                <label>Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={css.regFormInput}                
                />
            </div>
            <div className={css.regFormField}>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={css.regFormInput}                
                />
            </div>
            <button type="submit" className={css.regFormBtn}>
                Register
            </button>
        </form>
    </div>
  );
};
