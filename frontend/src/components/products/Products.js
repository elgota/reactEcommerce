import React, { useState } from 'react'
import css from "./Products.module.css"
import Plane from "../../assets/plane.png"
import { productsInitialState} from "../reducers/shoppingCart_reducer";
import { Link } from 'react-router-dom';

const Products = () => {

  



  const [MenuProducts, setMenuProducts] = useState(productsInitialState.products)

  const filter = (type) => {
    setMenuProducts(productsInitialState.products.filter((product) => product.type === type))
  }
  return (
    <div className={css.container}>
      <img src={Plane} alt=""></img>
      <h1>Our Featured products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(productsInitialState.products)}>ALL</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>
        <div className={css.list}>

          {
            MenuProducts.map((product, i) => (
              <div className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}$</span>
                 <Link to={`/ListaCarrito/${product.id}`}><span>Añadir al carrito</span></Link>
                </div>
                <img src={product.img} alt="" className="img-p"></img>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Products