import { ACTION_TYPES } from "../utils/helpers";

const { PRODUCTS, ADDDTOCART, REMOVEFROMCART } = ACTION_TYPES;

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, products: action.payload };
    case ADDDTOCART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVEFROMCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};


