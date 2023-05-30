import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/imgs/logo2.png';
import { useState } from 'react';
import classNames from 'classnames';
import silverBorder from 'assets/imgs/silverborder.png';



export default function Header() {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(false);

    function changeMenu() {
        setActiveMenu(!activeMenu);
    }

    function handleLink() {
        changeMenu();
        window.scrollTo(0, 0);
    }

    window.addEventListener('touchmove', () => setActiveMenu(false));
    window.addEventListener('resize', () => {
        if (window.innerWidth > 680 && !activeMenu) setActiveMenu(true);
        if (window.innerWidth <= 680 && activeMenu) setActiveMenu(false);
    });

    return (
        <header className={styles.container}>

            <div className={styles['area-logo']}>
                <button onClick={changeMenu}>
                    <FaBars className={styles['menu-button__icon']} size={30} />
                </button>
                <img src={logo} alt='The Arkanum' className={styles.logo} onClick={() => navigate('/')}></img>

            </div>
            <nav
                className={classNames({
                    [styles['navigation-show']]: window.innerWidth > 680 || activeMenu,
                    [styles['navigation-hide']]: !activeMenu
                })}
            >
                <ul>
                    <li><Link to={'/'} onClick={handleLink}>Home</Link></li>
                    <li><Link to={'/news'} onClick={handleLink}>News</Link></li>
                    <li><Link to={'/support'} onClick={handleLink}>Support</Link></li>
                    <li><Link to={'/community'} onClick={handleLink}>Community</Link></li>
                    <li>
                        <button className={styles['play-button']} onClick={changeMenu}>Play Now</button>
                    </li>
                </ul>
            </nav>
            <img src={silverBorder} alt='Silver border' className={styles['silver-border']} />
        </header>
    );
}