import { useState } from 'react';
import s from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../routes/Profile/profileSlice';
import avatar from '../../assets/avatar.png';

export function Header() {
  let { isAuth } = useSelector((state) => state.profile);
  let dispatch = useDispatch();
  let [menuOpen, setMenuOpen] = useState(false);

  let toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img src={logo} alt="Logo" className={s.logo} />
        <h2 className={s.title}>TravelHub</h2>
        <button className={s.navToggle} onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`${s.nav} ${menuOpen ? s.show : ''}`}>
        <Link to="/" className={s.navLink}>Главная</Link>
        <a href="#AboutUs" className={s.navLink}>О Нас</a>
        <a href="#Contacts" className={s.navLink}>Контакты</a>
        <NavLink to="/support" className={s.navLink}>
          Тех.Поддержка
        </NavLink>
        {isAuth ? (
          <>
            <Link to="/" className={s.navLink} onClick={() => dispatch(logout())}>
              Выход
            </Link>
            <Link to="/profile">
              <img src={avatar} alt="avatar" className={s.avatar} />
            </Link>
          </>
        ) : (
          <>
            <NavLink to="/login" className={s.navLink}>
              Вход
            </NavLink>
            <NavLink to="/registration" className={s.navLink}>
              Регистрация
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
