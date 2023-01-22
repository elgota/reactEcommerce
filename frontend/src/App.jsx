import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import AgregarProducto from "./pages/AgregarProducto";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";
import DashboardPage from "./pages/DashboardPage.jsx";
import { NuevaImagen } from "./components/nuevaImagen/NuevaImagen";
import VerProductos from "./components/VerProductos/VerProductos";
import "boxicons";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/lista-carrito" element={<Carrito />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/agregar" element={<AgregarProducto />} />
      <Route exact path="/images-upload" element={<ImagesUploadPage />} />
      <Route exact path="/images" element={<ImagesByProductIdPage />} />
      <Route path="/productos" element={<VerProductos />} />
      <Route path="/nuevaImagen" element={<NuevaImagen />} />
      <Route path="/redirect" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
