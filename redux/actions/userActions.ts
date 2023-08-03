import axios from "axios";
import {Dispatch} from "react";
import {Address} from "../models";
import location from "../../screens/Location/Location";


export interface UpdateLocationAction {
    readonly type: "ON_UPDATE_LOCATION";
    payload: Address
}
export interface UserErrorAction {
    readonly type: "ON_USER_ERROR";
    payload: any
}
export type UserAction = UpdateLocationAction | UserErrorAction;

export const onUpdateLocation = (location: Address)  => {
    return async (dispatch: Dispatch<UserAction>)=> {
        try {
            const locationString = JSON.stringify(location);
            //await AsyncStorage.setItem("user_location", locationString);
            console.log(location);
            dispatch({
                type: "ON_UPDATE_LOCATION",
                payload: location
            })
        } catch(e) {
            dispatch({
                type: "ON_USER_ERROR",
                payload: e
            })
        }
    }
}


