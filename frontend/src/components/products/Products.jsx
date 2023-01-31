import React, { useState, useEffect } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Loading from "../loading/loading.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getProductsImagesRequest } from "../../api/product.api";

function Products() {
  const boxSHDescProd = useRef(null);
  // let nameBoxSHDescProd = '';
  const [iDBoxSHDescProd, setIDBoxSHDescProd] = useState("");
  const [nameBoxSHDescProd, setNameBoxSHDescProd] = useState("");
  const [imgBoxSHDescProd, setImgBoxSHDescProd] = useState(null);
  const [detailBoxSHDescProd, setDetailBoxSHDescProd] = useState("");
  const [typeBoxSHDescProd, setTypeBoxSHDescProd] = useState("");
  const [priceBoxSHDescProd, setPriceBoxSHDescProd] = useState("");

  const [MenuProducts, setMenuProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await getProductsImagesRequest();
      setMenuProducts(res.data);
      setAllProducts(res.data);
      console.log(res.data);
    }

    loadProducts();
  }, []);

  const filter = (price) => {
    setMenuProducts(
      // eslint-disable-next-line
      AllProducts.filter((product) => {
        if (price === "lessThan50") {
          return product.price < 50.0;
        } else if (price === "between50and100") {
          return product.price >= 50.0 && product.price <= 100.0;
        } else if (price === "moreThan100") {
          return product.price > 100.0;
        }
      })
    );
  };

  function onBtnShowDesc(refBox, product) {
    refBox.style.display = "block";
    setIDBoxSHDescProd(product.id);
    setNameBoxSHDescProd(product.title);
    setImgBoxSHDescProd(product.data);
    setDetailBoxSHDescProd(product.content);
    setTypeBoxSHDescProd(product.summary);
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
            <li onClick={() => setMenuProducts(AllProducts)}>ALL</li>
            <li onClick={() => filter("lessThan50")}>Hasta $50</li>
            <li onClick={() => filter("between50and100")}>$50 a $100</li>
            <li onClick={() => filter("moreThan100")}>Mas de $100</li>
          </ul>
          <div className={css.list}>
            {console.log(MenuProducts)}
            {MenuProducts.length === 0 ? (
              <div className={css.loadProduct}>
                <Loading />
              </div>
            ) : (
              MenuProducts.map((product, i) => {
                return (
                  <div className={css.product} key={i}>
                    <div className="left-s">
                      <div className="name">
                        <span>{product.title}</span>
                      </div>

                      <div>
                        Precio: $<span>{product.price}</span>
                      </div>
                      <div
                        className={css.btnDescPro}
                        onClick={() =>
                          onBtnShowDesc(boxSHDescProd.current, product)
                        }
                      >
                        Ver Detalle
                      </div>
                    </div>
                    <img
                      className={css.image}
                      src={product.data}
                      alt="no img"
                    ></img>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div
        className={css.mainDivSHDescProd}
        ref={boxSHDescProd}
        style={{ display: "none" }}
      >
        <div className={css.divSHDescProd}>
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
                Nombre: <span>{nameBoxSHDescProd}</span>
              </p>
              <p>
                Precio producto: $<span>{priceBoxSHDescProd}</span>
              </p>
              <p>
                Descripcion: <span>{typeBoxSHDescProd}</span>
              </p>
              <p>
                Detalles Adicionales: <span>{detailBoxSHDescProd}</span>
              </p>
              <div className={css.divContLink}>
                <Link
                  to={`/private/cart/${iDBoxSHDescProd}`}
                  className={css.linkCarSHDescProd}
                >
                  <span>Añadir al carrito</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
