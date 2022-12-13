import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import css from "./Signup.module.css";


const Signup = () => {
    return (
        <div className={css.mainContainerSignup}>
            <div className={css.signupContainer}>
                <div className={css.logoTitle}>
                        <img src={Logo} alt="Logo" />
                        <h1>Vivero</h1>
                    </div>
                <form className={css.formContainer}>
                    <input type="text" name='name' placeholder='Nombre' required />
                    <input type="text" name='l-name' placeholder='Apellidos' required />
                    <input type="text" name='email' placeholder='Correo' required />
                    <input type="password" name='password' placeholder='Contraseña' required />
                    <input type="submit" value="Registarse" />
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/Login">Ingresar</Link></p>
            </div>
        </div>
    )
}

export default Signup