import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Profile/profileSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Navigate } from "react-router-dom";
import s from "./Registration.module.css";
import Logo from "../../assets/Logo.png";

export function Registration() {
  let [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let isAuth = useSelector((state) => state.profile.isAuth);

  let handleWrite = (e, field) => {
    setInputs({ ...inputs, [field]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(inputs));
    setInputs({ firstName: "", lastName: "", email: "", password: "" });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <main className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <img src={Logo} alt="Company Logo" className={s.logo} />
          <h1 className={s.title}>Регистрация</h1>
          <input
            type="text"
            value={inputs.firstName}
            onChange={(e) => handleWrite(e, "firstName")}
            placeholder="Имя"
            className={s.input}
          />
          <input
            type="text"
            value={inputs.lastName}
            onChange={(e) => handleWrite(e, "lastName")}
            placeholder="Фамилия"
            className={s.input}
          />
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => handleWrite(e, "email")}
            placeholder="Email"
            className={s.input}
          />
          <input
            type="password"
            value={inputs.password}
            onChange={(e) => handleWrite(e, "password")}
            placeholder="Пароль"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
