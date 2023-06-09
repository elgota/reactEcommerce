import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import css from "./Cart.module.css";
import TYPES from "../reducers/actionType.js";
import { productsInitialState, cartReducer } from "./../reducers/cartReducer";
import { useReducer } from "react";
import EmptyCart from "./EmptyCart.jsx";
import CartItem from "./CartItem.jsx";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      types: TYPES.ADD_TO_CART,
      payload: id,
    });
  };

  const deleteFromCart = (id) => {
    dispatch({
      types: TYPES.DELET_PRODUCT_FROM_CART,
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      types: TYPES.DELET_ALL_FROM_CART,
    });
  };

  const calculateTotalPrices = () => {
    dispatch({
      types: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART,
    });
  };

  const { id } = useParams();
  let numero = parseInt(id);
  // eslint-disable-next-line
  useEffect(() => addToCart(numero), []);
  useEffect(() => calculateTotalPrices(), []);

  const prueba = state.products[numero - 4];
  const [item, setItem] = useLocalStorage("ListProduct", " ");
  useEffect(() => setItem(prueba), [prueba, setItem]);
  console.log(item);

  return (
    <Fragment>
      <div className={css.container}>
        <ul className={css.tabContainer}>
          <li className={css.cart}>
            <span className={css.textCar}>Carrito({state.cart.length})</span>
          </li>
        </ul>
        <hr />
        {/* <button onClick={()=>calculateTotalPrices()}>calcular</button> */}
        {/* {
          state.products.map((product) => {
            return <CardProduct key={product.id} data={product} deleteFromCart={addToCart} />
          })
        } */}

        {state.cart.length === 0 && <EmptyCart />}

        {state.cart.map((productCart) => {
          return (
            <CartItem
              key={productCart.id + Math.random() * 50}
              data={productCart}
              deleteFromCart={deleteFromCart}
            />
          );
        })}

        <div className={css.botonYtotal}>
          {state.cart.length >= 1 && <h2>Total: ${state.totalPricesCart}</h2>}

          {state.cart.length >= 1 && (
            <button onClick={() => clearCart()} className={css.deleteAll}>
              Eliminar Todo
            </button>
          )}
        </div>
      </div>
      <div className={css.title}>
        <h2>OTRAS OFERTAS</h2>
        <hr className={css.divisor} />
      </div>
    </Fragment>
  );
}

export default Cart;
