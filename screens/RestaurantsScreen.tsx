import React from "react";
import {NavigationProp, NavigatorScreenParams, RouteProp} from "@react-navigation/native";
import {StackNavigatorParams} from "../navigation/MainNavigation";
import {Restaurant} from "../redux";
import Header from "../components/Header";
import {SafeAreaView, Image, StyleSheet} from "react-native";
import {Box, Text} from "../components/ThemeProvider";
interface RouteProps {
    item: Restaurant
}
interface Props {
    navigation: NavigationProp<StackNavigatorParams>,
    route: RouteProp<{ params: { item: Restaurant } }, 'params'>
}
const RestaurantsScreen:React.FC<Props> = ({navigation, route}) => {
    function handleBack() {
        console.log('back clicked');
    }

    const { item  } = route.params;
    console.log("Item clicked " + item.name);
    return (
        <SafeAreaView>
            <Box>
                <Header onTap={() => navigation.goBack()} title={item.name} />
                <Image source={{uri: item.images[0]}} style={styles.image}/>
            </Box>
        </SafeAreaView>
    )
}
export default RestaurantsScreen;
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    }
})
