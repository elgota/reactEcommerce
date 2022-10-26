import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { ProductosLista } from "./components/productos/index";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />

      <ProductosLista />
    </div>
  );
}

export default App;
