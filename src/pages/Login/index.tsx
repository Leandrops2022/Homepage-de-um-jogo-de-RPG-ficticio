import styles from './Login.module.scss';

export default function Login() {

    const handleSubmit = () => {
        console.log('por enquanto nao faz nada');
    };

    return (
        <div className={styles.main}>

            <div className={styles['grid-container']}>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend><h1>Log in to your Account</h1></legend>
                        <input type="text" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <button type='submit'>Login</button>
                    </fieldset>
                </form>
            </div>

        </div>

    );
}