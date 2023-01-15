import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import css from "./Login.module.css";

const Login = () => {
  const [inputTextEmail, setInputTextEmail] = useState("");
  const [inputTextPassword, setInputTextPassword] = useState("");

  const handleInputChangeEmail = (e) => {
    const text = e.target.value;
    setInputTextEmail(text);
    console.log(inputTextEmail);
  };
  const handleInputChangePassword = (e) => {
    const text = e.target.value;
    setInputTextPassword(text);
    console.log(inputTextPassword);
  };
  function consultData() {
    if (
      inputTextEmail === localStorage.getItem("email") &&
      inputTextPassword === localStorage.getItem("password")
    ) {
      alert("Inicio de sesión correcto");
    } else {
      alert("Error al iniciar sesión");
    }
  }

  return (
    <div className={css.mainContainerLogin}>
      <div className={css.loginContainer}>
        <div className={css.logoTitle}>
          <img src={Logo} alt="Logo" />
          <h1>Vivero</h1>
        </div>
        <form className={css.formContainer}>
          <input
            type="text"
            name="email"
            placeholder="Correo"
            onChange={handleInputChangeEmail}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChangePassword}
            required
          />
          <input type="submit" onClick={consultData} value="Ingresar" />
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
