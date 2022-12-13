import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import css from "./Login.module.css";


const Login = () => {
    return (
        <div className={css.mainContainerLogin}>
            <div className={css.loginContainer}>
                <div className={css.logoTitle}>
                        <img src={Logo} alt="Logo" />
                        <h1>Vivero</h1>
                    </div>
                <form className={css.formContainer}>
                    <input type="text" name='email' placeholder='Correo' required />
                    <input type="password" name='password' placeholder='Contraseña' required />
                    <input type="submit" value="Ingresar" />
                </form>
                <p>¿No tienes una cuenta? <Link to="/Signup">Registrarse</Link></p>
            </div>
        </div>
    )
}

export default Login