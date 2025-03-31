import { REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART } from "../constants";

const cartItems = (state = [], action, product) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.product.id !== action.payload.id);

        case CLEAR_CART:
            return [];

        default:
            return state;
    }
};

export default cartItems;
