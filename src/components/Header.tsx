import style from './Header.module.css';

import logo from '../assets/logo.svg';

export function Header() {
    return (
        <div className={style.header}>
            <img 
                src={logo}
                alt="Logo"
                className={style.logo}
            />
        </div>
    );
}