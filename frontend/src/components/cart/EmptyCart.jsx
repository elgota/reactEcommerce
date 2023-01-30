import React from "react";
import css from "./Cart.module.css";

function EmptyCart() {
  return (
    <div className={css.infoContainer}>
      <h2>Tu carrito esta vacío</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        laborum minus alias, distinctio dignissimos magnam, odit neque facilis
        dolorem maiores maxime natus non saepe amet officia odio quae eaque
        obcaecati!
      </p>
    </div>
  );
}

export default EmptyCart;
