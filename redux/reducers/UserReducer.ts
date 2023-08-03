import {Address, FoodModel, UserModel, UserState} from "../models";
import {UserAction} from "../actions/userActions";

const initialState: UserState = {
    user: {} as UserModel,
    location: {} as Address,
    error: undefined,
    Cart: {} as [FoodModel]
}
export const UserReducer = (state = initialState, action: UserAction) => {
    switch(action.type) {
        case "ON_UPDATE_LOCATION":
            return {...state, location: action.payload};
        default:
            return state;
    }
}
