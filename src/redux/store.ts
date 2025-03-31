import { createStore, combineReducers, applyMiddleware } from "redux"
import { ThunkMiddleware } from "redux-thunk"
import cartItems from "./reducers/cartItem";


const reducers = combineReducers({
    cartItems: cartItems
})

const store = createStore(
    reducers,
);

export default store;