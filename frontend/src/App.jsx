import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { ProductosLista } from "./components/productos/index";
import 'boxicons';
import { NuevaImagen } from './components/nuevaImagen/NuevaImagen';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* <ProductosLista /> */}

      <NuevaImagen />
    </div>
  );
}

export default App;
