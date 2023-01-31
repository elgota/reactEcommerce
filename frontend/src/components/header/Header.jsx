import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  CART,
  LOGIN,
  LOGOUT,
  PROFILE,
  DASHBOARD,
  HOME,
} from "./../../config/routes/paths.js";
import { useAuthContext } from "../../contexts/authContext";

function Header() {
  const { isAuthenticated, user } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" /> {/* remplazar */}
        <span>
          <Link to={HOME}>Vivero</Link>
        </span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <Link to={CART}>
            <CgShoppingCart className={css.cart}></CgShoppingCart>
          </Link>
        </div>

        <div>
          {isAuthenticated ? (
            <div className="dropdown">
              <button onClick={handleClick}>
                <div>{user.firstName}</div>
              </button>
              {isOpen && (
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <li>
                    <Link to={PROFILE}>Mi Perfil</Link>
                  </li>
                  <li>
                    <Link to={DASHBOARD}>Dashboard</Link>
                  </li>
                  <li>
                    <Link to={LOGOUT}>Cerrar Sesión</Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to={LOGIN}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
