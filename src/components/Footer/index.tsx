import styles from './Footer.module.scss';
import silverBorder from 'assets/imgs/silverborder.png';

export default function Footer() {
    return (
        <footer className={styles.main}>
            <img src={silverBorder} alt='Silver border' className={styles['silver-border']} />
            <div className={styles.footer}>
                <h4>2023, Developed by Leandro Soares</h4>
            </div>
        </footer>
    );
}