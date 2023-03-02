import { createContext, useContext, useEffect, useReducer } from "react"
import { useProductContext } from "./ProductContaxt";
import reducer from '../reducers/FilterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: true,
}

export const FilterContextProvider = ({children}) => {
    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // SET GRID VIEW
    const setGridView = () => {
        return dispatch({type:" SET_GRIDVIEW" });
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    },[products])  

    return <FilterContext.Provider value={{...state, setGridView}} >
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}