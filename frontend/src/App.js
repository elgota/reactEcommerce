
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home";
import Carrito from "./Page/Carrito";



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ListaCarrito/:id" element={<Carrito />}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
