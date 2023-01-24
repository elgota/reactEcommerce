import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  CART,
  ADD_PRODUCT,
  LOGIN,
  LOGOUT,
} from "./../../config/routes/paths.js";
import { useAuthContext } from "../../contexts/authContext";

function Header() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" /> {/* remplazar */}
        <span>
          <Link to="/">Vivero</Link>
        </span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>
              <Link to={ADD_PRODUCT}>Agregar Producto</Link>
            </li>
            <li>--------</li>
            <li>--------</li>
            <li>--------</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="search" />
        <div>
          <Link to={CART}>
            <CgShoppingCart className={css.cart}></CgShoppingCart>
          </Link>
        </div>
        <div className={css.account}>
          {isAuthenticated ? (
            <Link to={LOGOUT}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
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
