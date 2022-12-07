import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" /> {/* remplazar */}
        <span>Vivero</span>
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
        <i class="fas fa-user"></i>
        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingCart className={css.cart} />
      </div>
    </div>
  )
}

export default Header