import s from "./Support.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function Support() {
    return (
        <section>
            <Header />
            <div className={s.Container}>
                <h2 className={s.TitleSupport}>Тех. Поддержка</h2>
                <p className={s.Description}>Напишите нам</p>
                <p className={s.Description}>
                    Или попробуйте найти ответ сами - так будет быстрее:
                </p>
                <label className={s.Label} htmlFor="supportTopic">Тема:</label>
                <textarea className={s.TextArea} id="supportTopic" placeholder="Ваш вопрос или проблема..." />
                <button className={s.SubmitButton}>Отправить</button>
            </div>
            <Footer />
        </section>
    );
}