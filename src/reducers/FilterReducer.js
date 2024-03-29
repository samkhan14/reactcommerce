const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("priceSort");
            // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sortValue)
            return {
                ...state,
                price_sorting_value: action.payload
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            //let tempSortData = [...action.payload];

            const { filter_products } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a, b) => {
                if (state.price_sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (state.price_sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (state.price_sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (state.price_sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }

            newSortData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData
            }

        // for search product 
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters_search: {
                    ...state.filters_search,
                    [name]: value,
                },

            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products]

            const  { searchText, category, company, color } = state.filters_search;
            
            if (searchText) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(searchText);
                });
            }          

            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                });    
            }

            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter(
                (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
                );    
            } 
            
            if (color) {
                tempFilterProduct = tempFilterProduct.filter((
                   curElem) => curElem.colors.includes(color));
            }
         
            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        default:
            return state;
    }
};

export default FilterReducer;