import {Dispatch} from "react";
import {FoodAvailability} from "../models";
import axios from "axios";
import {BASE_URL} from "../../utilities/constants";

export interface AvailabilityAction {
    readonly type: "ON_AVAILABILITY";
    payload: FoodAvailability
}
export interface ShoppingErrorAction {
    readonly type: "ON_AVAILABILITY_ERROR";
    payload: any;
}
export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

export const onAvailability = (pincode: string) => {
    return async (dispatch: Dispatch<ShoppingAction>) => {
        try {
            const url = `${BASE_URL}food/availability/${pincode}`;
            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/${pincode}`);
            //console.log(response.data.restaurants[0].images[0]);
            if(!response) {
                dispatch({
                    type: "ON_AVAILABILITY_ERROR",
                    payload: "No food available at location"
                })
            }
            dispatch({
                type: "ON_AVAILABILITY",
                payload: response.data
            })
        } catch(e) {
            console.log(e);
            dispatch({
                type: "ON_AVAILABILITY_ERROR",
                payload: e
            })
        }

    }
}
