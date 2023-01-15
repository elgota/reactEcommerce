import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { productsInitialState } from "../reducers/shoppingCart_reducer";
import { Link } from "react-router-dom";
import { useRef } from "react";

// import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  // const getCustomProductRequest = async () =>
  // await axios.get("http://localhost:4000/api/products/custom");

  const boxSHDescProd = useRef(null);
  // let nameBoxSHDescProd = '';
  const [iDBoxSHDescProd, setIDBoxSHDescProd] = useState("");
  const [nameBoxSHDescProd, setNameBoxSHDescProd] = useState("");
  const [imgBoxSHDescProd, setImgBoxSHDescProd] = useState(null);
  const [detailBoxSHDescProd, setDetailBoxSHDescProd] = useState("");
  const [typeBoxSHDescProd, setTypeBoxSHDescProd] = useState("");
  const [priceBoxSHDescProd, setPriceBoxSHDescProd] = useState("");

  // console.log(getCustomProductRequest());

  const [MenuProducts, setMenuProducts] = useState(
    productsInitialState.products
  );

  const filter = (type) => {
    setMenuProducts(
      productsInitialState.products.filter((product) => product.type === type)
    );
  };

  function onBtnShowDesc(refBox, product) {
    console.log(product);
    refBox.style.display = "block";
    setIDBoxSHDescProd(product.id);
    setNameBoxSHDescProd(product.name);
    setImgBoxSHDescProd(product.img);
    setDetailBoxSHDescProd(product.detail);
    setTypeBoxSHDescProd(product.type);
    setPriceBoxSHDescProd(product.price);
    console.log(nameBoxSHDescProd);
  }
  function onBtnHideDesc(refBox, product) {
    refBox.style.display = "none";
  }

  return (
    <>
      <div className={css.container}>
        <img src={Plane} alt=""></img>
        <h1>Our Featured products</h1>
        <div className={css.products}>
          <ul className={css.menu}>
            <li onClick={() => setMenuProducts(productsInitialState.products)}>
              ALL
            </li>
            <li onClick={() => filter("skin care")}>Skin Care</li>
            <li onClick={() => filter("conditioner")}>Conditioners</li>
            <li onClick={() => filter("foundation")}>Foundations</li>
          </ul>
          <div className={css.list}>
            {MenuProducts.map((product, i) => (
              <div className={css.product} key={i}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}$</span>
                  <Link to={`/listaCarrito/${product.id}`}>
                    <span>Añadir al carrito</span>
                  </Link>
                  <div
                    className={css.btnDescPro}
                    onClick={() =>
                      onBtnShowDesc(boxSHDescProd.current, product)
                    }
                  >
                    Ver descripción
                  </div>
                </div>
                <img src={product.img} alt="" className="img-p"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={css.divSHDescProd}
        ref={boxSHDescProd}
        style={{ display: "none" }}
      >
        <div className={css.barTopDivSH}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => onBtnHideDesc(boxSHDescProd.current)}
          />
        </div>
        <div className={css.contentDivSH}>
          <div
            className={css.imgSHDescProd}
            style={{ backgroundImage: `url(${imgBoxSHDescProd})` }}
          ></div>
          <div>
            <p>
              Nombre producto: <span>{nameBoxSHDescProd}</span>
            </p>
            <p>
              Detalles del producto: <span>{detailBoxSHDescProd}</span>
            </p>
            <p>
              Tipo de producto: <span>{typeBoxSHDescProd}</span>
            </p>
            <p>
              Precio producto: $<span>{priceBoxSHDescProd}</span>
            </p>
            <div className={css.divContLink}>
              <Link
                to={`/listaCarrito/${iDBoxSHDescProd}`}
                className={css.linkCarSHDescProd}
              >
                <span>Añadir al carrito</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
