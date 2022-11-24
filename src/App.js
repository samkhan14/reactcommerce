import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/Products/SingleProduct';
import Cart from './Pages/Cart/Cart';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyleComponent } from './Components/GlobalStyleComponent';

function App() {
  return (
    <>
    <Router>
      <GlobalStyleComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
    {/* <div className="App">
      <Home />    
    </div> */}
    </>
  );
}

export default App;
