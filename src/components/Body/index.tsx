import styles from './Body.module.scss';
import { Outlet } from 'react-router-dom';

export default function Body() {
    return (
        <div className={styles.main}>
            <Outlet />
        </div>
    );
}