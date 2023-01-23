import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ADD_PRODUCT, CART } from "./../../config/routes/paths.js";

function HeaderLogout() {
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
          <Link to="/profile/logout">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogout;
