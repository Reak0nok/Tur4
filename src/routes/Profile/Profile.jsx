import { useSelector, useDispatch } from "react-redux";
import s from "./Profile.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Ticket } from "../../components/Ticket/Ticket";
import avatar from '../../assets/avatar.png';

export function Profile() {
  let select = useSelector((state) => state.profile);

  if (!select.isAuth || !select.loggedInUser) {
    return <h2 className={s.message}>Вы не авторизованы. Пожалуйста, войдите в систему.</h2>;
  }

  let paidItems = select.loggedInUser.paidItems || [];

  return (
    <>
      <Header />
      <main className={s.container}>
        <div className={s.profile}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <h1 className={s.name}>{select.loggedInUser.name}</h1>
          <p className={s.email}>{select.loggedInUser.email}</p>

        </div>
        <div className={s.orders}>
          <h2>Мои Путешествия:</h2>
          {paidItems.length === 0 ? (
            <p className={s.empty}>Здесь будет отображаться информация о ваших билетах[].</p>
          ) : (
            <ul className={s.list}>
              {paidItems.map((item, index) => (
                <Ticket key={index} img={item.img} title={item.title} info={item.info} description={item.description} cost={item.cost} />
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
