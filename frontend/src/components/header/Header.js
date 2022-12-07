import React from 'react'
import { Link } from 'react-router-dom';
import css from "./Header.module.css"
import Logo from "../../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" /> {/* remplazar */}
        <span><Link to="/">Vivero</Link></span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>--------</li>
            <li>--------</li>
            <li>--------</li>
            <li>--------</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="search" />
        <Link to="/ListaCarrito"><CgShoppingCart className={css.cart} ></CgShoppingCart></Link>
      </div>
    </div>
  )
}

export default Header