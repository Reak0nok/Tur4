import s from "./Contacts.module.css"
import ConMap from '../../assets/contactsMap.png'
export function Contacts() {
    return (
        <div id="Contacts" className={s.container}>
            <h2 className={s.title}>Контакты</h2>
            <div className={s.top}>
                <div className={s.left}>
                    <p className={s.text}>Электронная почта для связи:  TravelHub@mail.ru</p>
                    <p className={s.text}>Телефон для обратной связи: +7 988 222 44 56</p>
                    <p className={s.text}>Адрес офиса или почтовый адрес: г. Москва, ул. Примерная, д. 1, офис 101</p>
                    <p className={s.text}>Нас можно найти на таких платформах: WhatsApp, Telegram, Vk.</p>
                </div>
                <img className={s.imgContacts} src={ConMap} alt="" />
            </div>
            <div className={s.bottom}>
                <div className={s.ManagerContainer}>
                    <h3 className={s.profession}>Менеджер</h3>
                    <h4 className={s.Name}>Дмитрий Смирнов</h4>
                    <p className={s.discription}>Должность: Менеджер по работе с клиентами</p>
                    <p className={s.discription}>Телефон: +7 (999) 123-45-67</p>
                    <p className={s.discription}>Почта: example@mail.ru</p>
                    <p className={s.discription}>Обязанности: Помощь в оформлении заказов</p>
                    <p className={s.discription}>Часы работы: 8:00 - 20:00</p>
                </div>
                <div className={s.ManagerContainer}>
                    <h3 className={s.profession}>Менеджер</h3>
                    <h4 className={s.Name}>Дмитрий Смирнов</h4>
                    <p className={s.discription}>Должность: Менеджер по работе с клиентами</p>
                    <p className={s.discription}>Телефон: +7 (999) 123-45-67</p>
                    <p className={s.discription}>Почта: example@mail.ru</p>
                    <p className={s.discription}>Обязанности: Помощь в оформлении заказов</p>
                    <p className={s.discription}>Часы работы: 8:00 - 20:00</p>
                </div>
            </div>
        </div>
    )
};

