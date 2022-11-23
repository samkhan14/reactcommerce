import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/Products/SingleProduct';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
    
    {/* <div className="App">
      <Home />    
    </div> */}
    </>
  );
}

export default App;
