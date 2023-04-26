import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContaxt";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  price_sorting_value: "lowest",
  filters_search: {
    searchText:"",
    category:"all",
    company:"all",
    color:"all"
  },
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

    // search filter products
    const updateSearchFilterValue = (event) => {
      let name = event.target.name;
      let value = event.target.value;
  
      dispatch({type:"UPDATE_FILTERS_VALUE", payload:{ name, value }});
    }

  // To Sort The Products
  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"})
   dispatch({ type: "SORTING_PRODUCTS"});
  }, [products, state.price_sorting_value, state.filters_search]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, priceSorting, updateSearchFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
