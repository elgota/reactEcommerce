import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import css from "./Login.module.css";
import { Form, Formik } from "formik";
import { useAuthContext } from "../../contexts/authContext";

function Login() {
  const { login } = useAuthContext();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            login(values);
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
