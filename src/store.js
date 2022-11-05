import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {
    //   allUsersReducer,
    forgotPasswordReducer,
    profileReducer,
    //   userDetailsReducer,
    userReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    // myOrders: myOrdersReducer,
    // orderDetails: orderDetailsReducer,
    // newReview: newReviewReducer,
    // newProduct: newProductReducer,
    // product: productReducer,
    // allOrders: allOrdersReducer,
    // order: orderReducer,
    // allUsers: allUsersReducer,
    // userDetails: userDetailsReducer,
    // productReviews: productReviewsReducer,
    // review: reviewReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;