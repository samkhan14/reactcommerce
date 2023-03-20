import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContaxt";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  price_sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // SET GRID VIEW
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // SET List VIEW
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //Price Sorting 
  const priceSorting = (event) => {
    let userSortValue = event.target.value;
    dispatch({ type:"GET_SORT_VALUE", payload: userSortValue });
  }

  // To Sort The Products
  useEffect(() => {
   dispatch({ type: "SORTING_PRODUCTS"});
  }, [products, state.price_sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, priceSorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
