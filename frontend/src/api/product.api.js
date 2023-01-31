import axios from "axios";

export const getProductRequest = async () =>
  await axios.get("http://localhost:4000/api/products");

export const getProductsImagesRequest = async () =>
  await axios.get("http://localhost:4000/api/products-images");

export const createProductRequest = async (product) =>
  await axios.post("http://localhost:4000/api/products", product);

export const deleteProductRequest = async (productId) =>
  await axios.delete(`http://localhost:4000/api/products/${productId}`);
