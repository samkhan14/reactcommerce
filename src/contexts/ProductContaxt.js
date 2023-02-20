import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  feturedProducts: [],
  isSingleLoading: false,
  singleProduct:{}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
    // console.log(products);
  };


  // get single product data
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SING_PRODUCT_DATA", payload: singleProduct });
    } 
    catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
