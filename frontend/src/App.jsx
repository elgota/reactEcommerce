import { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import AgregarProducto from "./pages/AgregarProducto";
import ImagesUploadPage from "./pages/ImagesUploadPage";
import ImagesByProductIdPage from "./pages/ImagesByProductIdPage";

function App() {
  const appComponent = useRef();

  useEffect(() => {});

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/lista-carrito" element={<Carrito />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/agregar" element={<AgregarProducto />} />
      <Route exact path="/images-upload" element={<ImagesUploadPage />} />
      <Route exact path="/images" element={<ImagesByProductIdPage />} />
    </Routes>
  );
}

export default App;
