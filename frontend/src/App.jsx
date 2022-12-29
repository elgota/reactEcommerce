import React from "react";
import "./App.css";
import 'boxicons';
import NavBar from "./components/NavBar/NavBar";
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";
import { Routes, Route } from "react-router-dom";
import { NuevaImagen } from "./components/nuevaImagen/NuevaImagen";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<NuevoProducto />}></Route>
        <Route path="/nuevaImagen" element={<NuevaImagen />}></Route>

      </Routes>

    </div>
  );
}

export default App;
