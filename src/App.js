import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/Products/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Brands from "./Pages/Brands/Brands";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//theme obj defined
const theme = {
  colors: {
    bg: "#fff",
    color: "#000",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Brands" element={<Brands />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer/>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
