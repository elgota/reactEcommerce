import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { ProductosLista } from "./components/productos/index";
import 'boxicons';
import { NuevaImagen } from './components/nuevaImagen/NuevaImagen';
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* <ProductosLista /> */}

      {/* <NuevaImagen /> */}

      <NuevoProducto/>
    </div>
  );
}

export default App;
