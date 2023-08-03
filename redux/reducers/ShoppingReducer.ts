import {ShoppingAction} from "../actions/shoppingActions";
import {FoodAvailability, FoodModel, ShoppingState} from "../models";

const INITIAL_STATE: ShoppingState = {
    availability: {} as FoodAvailability,
    availableFoods: {} as [FoodModel]
}
export const ShoppingReducer = (state=INITIAL_STATE, action: ShoppingAction) => {
    const { type, payload } = action;
    switch(type) {
        case "ON_AVAILABILITY":
            return {...state, availability: payload};
        default:
            return state;

    }
}
