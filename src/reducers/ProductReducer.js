const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCTS_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        feturedProducts:featureData,
      };

    case "API_ERROR":
      return {
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
