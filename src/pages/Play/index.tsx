import { Link } from 'react-router-dom';
import styles from './Play.module.scss';

export default function Play() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('por enquanto nao faz nada');
    };

    return (
        <div className={styles.main}>

            <div className={styles['grid-container']}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <fieldset>
                        <legend><h1>Create your Account</h1></legend>
                        <input type="text" placeholder='First Name' required />
                        <input type="text" placeholder='Last Name' required />
                        <label htmlFor="birth-date" className={styles.birth}>Date of birth</label>
                        <input id="birth-date" type='date' />
                        <input type="text" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <input type="password" placeholder='Confirm Password' required />
                        <select required defaultValue="Country">
                            <option value="" >Country</option>
                            <option>Brazil</option>
                            <option>United States</option>
                            <option>China</option>
                            <option>United Kingdom</option>
                            <option>Other</option>
                        </select>

                        <div className={styles.agreement}>
                            <input type='checkbox' id='Agreement' required />
                            <label htmlFor="Agreement">
                                I read and agree with the <a href='#'>Company Terms of use </a>
                                and I agree to the terms
                            </label>
                            <br />
                            <input type='checkbox' id='Privacy' required />
                            <label htmlFor="Privacy">
                                I read and agree with the <a href='#'>Company Terms of Privacy </a>
                                and I agree to the terms
                            </label>
                        </div>

                        <button type='submit' >Register</button>
                        <span>
                            <Link to={'/play'}>Already have an Account? Click here to login and download the game</Link>
                        </span>
                    </fieldset>
                </form>
            </div>

        </div>

    );
}