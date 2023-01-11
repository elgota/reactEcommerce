import { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home";
import Carrito from "./Page/Carrito";
import Login from"./Page/account/Login";
import Signup from './Page/account/Signup'
<<<<<<< HEAD
=======
import AgregarProducto from './Page/AgregarProducto';
>>>>>>> 4d451132f3e33aaa6eb3a308e043cab2acb3d37d



function App() {
  const appComponent = useRef();

  useEffect(() => {
    
  })
  
  return (
    <Router>
    <div className="App" ref={appComponent}>
      <Routes>
        <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
        <Route exact path="/ListaCarrito" element={<Carrito />}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup />} />
=======
        <Route exact path="/ListaCarrito/:id" element={<Carrito />}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path='/Agregar' element={<AgregarProducto/>}/>

>>>>>>> 4d451132f3e33aaa6eb3a308e043cab2acb3d37d
      </Routes>
    </div>
    
    </Router>

  );
}


export default App;
