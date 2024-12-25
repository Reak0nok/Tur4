import { useDispatch } from "react-redux";
import { addPaidItems } from "../../routes/Profile/profileSlice";
import s from "./Ticket.module.css";

export function Ticket({id, img, title, info, description, cost }) {
  let dispatch = useDispatch();

  function handleBuy() {
    let ticketItem = {
      id,
      img,
      title,
      info,
      description,
      cost,
    };
    dispatch(addPaidItems([ticketItem]));
  };

  return (
    <div className={s.container}>
      <img className={s.TicketImg} src={img} alt={title} />
      <div className={s.right}>
        <h3 className={s.TicketTitle}>{title}</h3>
        <p className={s.TicketInfo}>{info}</p>
        <p className={s.TicketDescription}>{description}</p>
        <div className={s.BuyContainer}>
          <p className={s.Cost}>{cost}</p>
          <button className={s.BuyButton} onClick={handleBuy}>
            Оформить
          </button>
        </div>
      </div>
    </div>
  );
}
