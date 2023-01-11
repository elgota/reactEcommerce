import { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home";
import Carrito from "./Page/Carrito";
import Login from"./Page/account/Login";
import Signup from './Page/account/Signup'
import AgregarProducto from './Page/AgregarProducto';



function App() {
  const appComponent = useRef();

  useEffect(() => {
    
  })
  
  return (
    <Router>
    <div className="App" ref={appComponent}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ListaCarrito/:id" element={<Carrito />}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path='/Agregar' element={<AgregarProducto/>}/>

      </Routes>
    </div>
    
    </Router>

  );
}


export default App;
