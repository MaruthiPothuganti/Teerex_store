import { ACTION_TYPES } from "../utils/helpers";

const { PRODUCTS, ADDTOCART, REMOVEFROMCART, INCREMENTPRODUCTQUANTITY,DECREMENTPRODUCTQUANTITY } = ACTION_TYPES;

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, products: action.payload };

    case ADDTOCART:
      return { ...state, cart: [...state.cart, {...action.payload, orderQuantity:1}], };

    case REMOVEFROMCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),

      };

    case INCREMENTPRODUCTQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>item.id===action.payload.id? {...item,orderQuantity:item.orderQuantity+1}: item)
      }

    case DECREMENTPRODUCTQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>item.id===action.payload.id?  {...item,orderQuantity:item.orderQuantity-1}: item)
      }

    default:
      return state;
  }
};


