import s from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer"
import { Contacts } from "../../components/Contacts/Contacts";
import dengy from '../../assets/dengy.png'
import podderdgka from '../../assets/podderdgka.png'
import garantya from '../../assets/garantya.png'
import { DatePicker } from '../../components/DatePicker/DatePicker'
import { useDispatch } from "react-redux";
import {createTikets} from '../Tickets/TicketsSlice'
export function Home() {

  let disp = useDispatch()
  return (
    <section className={s.container}>
      <Header />
      <DatePicker />
      <main className={s.main}>
        <div className={s.prostoContainer}>
          <h2 id="AboutUs" className={s.AboutUsTitle}>Почему следует выбрать нас?</h2>
          <div className={s.AboutUsContainer}>
            <div className={s.AboutUsContainerInContainer}>
              <img className={s.aboutUsimg} src={dengy} alt="" />
              <p className={s.aboutUsText}>
                Доступные цены
              </p>
            </div>
            <div className={s.AboutUsContainerInContainer}>
              <img className={s.aboutUsimg} src={garantya} alt="" />
              <p className={s.aboutUsText}>
                Гарантия
              </p>
            </div>
            <div className={s.AboutUsContainerInContainer}>
              <img className={s.aboutUsimg} src={podderdgka} alt="" />
              <p className={s.aboutUsText}>
                Поддержка 24/7
              </p>
            </div>
          </div>
        </div>
      </main>
      <Contacts />
      <button onClick={() => disp(createTikets())}>загрузить</button>
      <Footer />
    </section>
  );
}
