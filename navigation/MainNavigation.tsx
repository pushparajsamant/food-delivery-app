import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Location from "../screens/Location/Location";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {Image, StyleSheet} from "react-native";
import Search from "../screens/Search";
import {FoodModel, Restaurant} from "../redux";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import FoodsScreen from "../screens/FoodsScreen";
export type StackNavigatorParams = {
    Location: undefined,
    TabNavigation: undefined,
    Search: undefined,
    RestaurantsScreen: { item: Restaurant }
    FoodsScreen: { item: FoodModel }
}
export type BottomTabNavigatorParams = {
    Home: undefined,
    Offers: undefined
    Carts: undefined
    Account: undefined
}
const Stack = createStackNavigator<StackNavigatorParams>();
const Tabs = createBottomTabNavigator<BottomTabNavigatorParams>();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
            <Stack.Screen name="FoodsScreen" component={FoodsScreen} />
        </Stack.Navigator>
    );
}
const TabNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let imageName;

                if (route.name === "Home") {
                    imageName = focused
                        ? require('../assets/images/home_icon.png')
                        : require('../assets/images/home_n_icon.png');
                } else if (route.name === "Offers") {
                    imageName = focused
                        ? require('../assets/images/offer_icon.png')
                        : require('../assets/images/offer_n_icon.png');
                } else if(route.name == "Carts") {
                    imageName = focused
                        ? require('../assets/images/cart_icon.png')
                        : require('../assets/images/cart_n_icon.png');
                } else if(route.name == "Account") {
                    imageName = focused
                        ? require('../assets/images/account_icon.png')
                        : require('../assets/images/account_n_icon.png');
                }


                // You can return any component that you like here!
                return <Image source={imageName} style={styles.tabIcon}/>;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Offers" component={Home} />
            <Tabs.Screen name="Carts" component={Home} />
            <Tabs.Screen name="Account" component={Home} />
        </Tabs.Navigator>
    );
}
export default MainNavigation;
const styles = StyleSheet.create({
    tabIcon: {
        width: 30,
        height: 30
    }
})
