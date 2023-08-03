import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {ShoppingReducer} from "./ShoppingReducer";

const rootReducer = combineReducers({
    userReducer: UserReducer,
    shoppingReducer: ShoppingReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
