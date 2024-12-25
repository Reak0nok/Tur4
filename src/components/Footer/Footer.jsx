import s from "./Footer.module.css";
import Logo from '../../assets/Logo.png'
import Vk from '../../assets/vk.svg'
import odnoklassniki from '../../assets/odnoklassniki.svg'
import Telega from '../../assets/Telega.png'
import What from '../../assets/What.png'

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.line}></div>
            <div className={s.logoContainer}>
                <p className={s.logoText}>&copy; {new Date().getFullYear()} TravelHub.</p>
                <img className={s.logo} src={Logo} alt="" />
            </div>
            <p>Предложения на сайте не являются публичной офертой и носят исключительно информационный характер.</p>
            <div className={s.socialContainer}>
                <img className={s.social} src={Vk} alt="" />
                <img className={s.social} src={odnoklassniki} alt="" />
                <img className={s.social} src={Telega} alt="" />
                <img className={s.social} src={What} alt="" />
            </div>
        </footer>
    );
}