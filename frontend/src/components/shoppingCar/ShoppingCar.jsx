import React from 'react'
import { Fragment } from 'react'
import css from "./ShoppingCar.module.css"

const ShoppingCar = () => {
  return (
    <Fragment>
      <div className={css.container}>
        <ul className={css.tabContainer}>
          <li className={css.shopping}><span className={css.textCar}>Carrito(0)</span></li>
        </ul>
        <hr />
        <div className={css.infoContainer}>
          <h2>Tu carrito esta vacío</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum minus alias, distinctio dignissimos magnam, odit neque facilis dolorem maiores maxime natus non saepe amet officia odio quae eaque obcaecati!</p>
        </div>
      </div>
      <div className={css.title}>
        <h2>OTRAS OFERTAS</h2>
        <hr className={css.divisor} />
      </div>
    </Fragment>
  )
}

export default ShoppingCar