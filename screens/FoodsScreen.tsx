import React from "react";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import {StackNavigatorParams} from "../navigation/MainNavigation";
import {Restaurant} from "../redux";

interface Props {
    navigation: NavigationProp<StackNavigatorParams>,
    route: RouteProp<StackNavigatorParams>
}
const FoodsScreen:React.FC<Props> = ({navigation, route}) => {
    const { item } = route.params;
    console.log(item);
    return (
        <></>
    )
}
export default FoodsScreen;
