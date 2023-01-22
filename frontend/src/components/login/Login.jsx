import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import css from "./Login.module.css";
import { loginRequest } from "./../../../src/api/login.api";
import { Form, Formik } from "formik";

function Login() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await loginRequest(values);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className={css.mainContainerLogin}>
              <div className={css.loginContainer}>
                <div className={css.logoTitle}>
                  <img src={Logo} alt="Logo" />
                  <h1>Vivero</h1>
                </div>
                <div className={css.formContainer}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Correo"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    required
                  />
                  <input type="submit" value="Ingresar" />
                </div>
                <p>
                  ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
