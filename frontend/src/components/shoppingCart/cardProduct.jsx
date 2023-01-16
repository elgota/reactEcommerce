import React from "react";
import css from "./ShoppingCart.module.css";

function cardProduct({ data, deleteFromCart, id }) {
  return (
    <div className={css.card}>
      <div className={css.imgProduct}>
        <img className={css.img} src={data.img} alt="planta" />
      </div>
      <div className={css.cardDivicion}>
        <div className={css.name}>
          <span>{data.name}</span>
          <span>${data.price}</span>
          <span>{data.detail}</span>
          <button onClick={() => deleteFromCart(data.id)} className={css.boton}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default cardProduct;
