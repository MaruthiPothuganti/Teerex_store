import { ACTION_TYPES } from "../utils/helpers";
import { filterInitialState } from "../Context/FilterContext";

const { COLOUR,GENDER,TYPE,PRICE, RESET } = ACTION_TYPES;

export const filterReducer = (state, action) => {
    switch (action.type) {
        case COLOUR:
            return { ...state, colors: !state.colors.includes(action.payload) ? [...state.colors, action.payload] : state.colors.filter((item) => item !== action.payload) }
        case GENDER:
            return { ...state, genders: !state.genders.includes(action.payload) ? [...state.genders, action.payload] : state.genders.filter((item) => item !== action.payload) }
        case TYPE:
            return { ...state, types: !state.types.includes(action.payload) ? [...state.types, action.payload] : state.types.filter((item) => item !== action.payload) }
        case PRICE:
            return { ...state, price: { min: action.payload.min, max: action.payload.max } }

        case RESET:
            return filterInitialState;

        default:
            return state;
    }
}


