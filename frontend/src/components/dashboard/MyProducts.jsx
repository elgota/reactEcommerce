import React, { useState, useEffect } from "react";
import {
  getProductsImagesByUserIdRequest,
  deleteProductRequest,
} from "../../api/product.api";
import { useAuthContext } from "../../contexts/authContext";
import css from "./MyProducts.module.css";
import AddProduct from "./AddProduct";

function MyProducts() {
  const { user } = useAuthContext();

  const [products, setProducts] = useState([]);

  const onEdit = (product) => {
    return <AddProduct />;
  };

  const onDelete = async (productId) => {
    try {
      const response = await deleteProductRequest(productId);
      console.error(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getProductsImagesByUserIdRequest(user.id);
      //console.log(user.id);
      setProducts(res.data);
      //console.log(products);
    }

    loadProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.cell}>Nombre</th>
          <th className={css.cell}>Precio</th>
          <th className={css.cell}>Cantidad</th>
          <th className={css.cell}>Imagen</th>
          <th className={css.cell}>Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className={css.row}>
            <td className={css.cell}>{product.title}</td>
            <td className={css.cell}>{product.price}</td>
            <td className={css.cell}>{product.quantity}</td>
            <td className={css.cell}>
              <img
                src={product.data}
                alt={product.title}
                className={css.image}
              />
            </td>

            <td className="cell">
              <button onClick={() => onEdit(product)} className="button">
                Editar
              </button>
              <button onClick={() => onDelete(product.id)} className="button">
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyProducts;
