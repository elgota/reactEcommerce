import axios from "axios";

export const getProductRequest = async () =>
  await axios.get("http://localhost:4000/api/products");

export const getProductRequestByProductId = async (productId) =>
  await axios.get(`http://localhost:4000/api/products/${productId}`);

export const getProductsImagesRequest = async () =>
  await axios.get("http://localhost:4000/api/products-images");

export const getProductsImagesByUserIdRequest = async (userId) =>
  await axios.get(
    `http://localhost:4000/api/products-images-by-user?userId=${userId}`
  );

export const createProductRequest = async (product) =>
  await axios.post("http://localhost:4000/api/products", product);

export const deleteProductRequest = async (productId) =>
  await axios.put(`http://localhost:4000/api/delete-product/${productId}`);
