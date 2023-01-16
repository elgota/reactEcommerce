import React from "react";
import "./App.css";
import "boxicons";
import NavBar from "./components/NavBar/NavBar";
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";
import { Routes, Route } from "react-router-dom";

import VerProductos from "./components/VerProductos/VerProductos";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";
import {NuevaImagen} from "./components/nuevaImagen/NuevaImagen";
import ImagenBase64 from "./components/ImagenBase64/ImagenBase64";
import MultiplesImagenes from "./components/MultiplesImagenes/MultiplesImagenes";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<NuevoProducto />}></Route>

        <Route path="/productos" element={<VerProductos />}></Route>
        <Route path="/nuevaImagen" element={<NuevaImagen />}></Route>
        <Route path="/images-upload" element={<ImagesUploadPage />} />
        <Route path="/images" element={<ImagesByProductIdPage />} />
        <Route path="/imagesBase64" element={<ImagenBase64/>} />
        <Route path="/multiplesImagenes" element={<MultiplesImagenes/>} />
      </Routes>
    </div>
  );
}

export default App;
