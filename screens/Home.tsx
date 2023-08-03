import React, {useEffect, useState} from "react";
import {ApplicationState, FoodModel, onAvailability, Restaurant, ShoppingState, UserState} from "../redux";
import {connect} from "react-redux";
import {Text} from "../components/ThemeProvider";
import {Box} from "../components/ThemeProvider";
import {FlatList, SafeAreaView, ScrollView} from "react-native";
import globalStyles from "../assets/styles/globalStyles";
import SearchBar from "../components/SearchBar";
import {NavigationProp} from "@react-navigation/native";
import {StackNavigatorParams} from "../navigation/MainNavigation";
import IconButton from "../components/IconButton";
import ImageCard from "../components/ImageCard";
import FullCard from "../components/FullCard";

interface HomeProps {
    userReducer: UserState;
    shoppingReducer: ShoppingState,
    onAvailability: Function,
    navigation: NavigationProp<StackNavigatorParams>
}
const _Home: React.FC<HomeProps> = ({onAvailability, navigation, userReducer, shoppingReducer}) => {
    const { foods, restaurants, categories } = shoppingReducer.availability;
    const { name, city, postalCode } = userReducer.location;
    useEffect(() => {
        onAvailability('400010');
        return () => {}
    },[]);
    const handleRestaurantTap = (item: Restaurant) => {
        navigation.navigate("RestaurantsScreen", {item});
    }
    const handleFoodTap = (item: FoodModel) => {
        navigation.navigate("RestaurantsScreen", {item});
    }
    return (
        <SafeAreaView style={[globalStyles.flexStyle, globalStyles.backgroundWhite]}>
            <ScrollView>
                <Box paddingHorizontal={"l"} flexDirection={"row"} alignItems={"center"} marginBottom={"s"} gap={"s"}>
                    <IconButton source={require('../assets/images/delivery_icon.png')} width={20} height={20} onTap={() => {}} />
                    <Text variant={"smallbody"}>{`${name}, ${city}, ${postalCode}`}</Text>
                    <IconButton source={require('../assets/images/edit_icon.png')} width={20} height={20} onTap={() => {}} />
                </Box>
                <Box flexDirection={"row"} justifyContent={'space-around'} alignItems={"center"}>
                    <SearchBar placeholder={'Search Foods'} onFocus={() => navigation.navigate("Search")} onTextChange={() => {}}/>
                    <IconButton source={require('../assets/images/hambar.png')} width={40} height={20} onTap={() => {}} />
                </Box>
                <Box marginTop={"m"}>
                    <FlatList showsHorizontalScrollIndicator={false} data={categories} renderItem={({item}) => <ImageCard item={item} onTap={() => {}}/>} horizontal={true} />
                </Box>
                {restaurants && restaurants.length > 0 && <Box marginTop={"l"} paddingHorizontal={"m"} gap={"m"}>
                    <Text variant={"title"}>Top Restaurants</Text>
                    <FlatList data={restaurants} renderItem={({item}) => <FullCard item={item}  onTap={handleRestaurantTap}/>} horizontal />
                </Box>}
                {foods && foods.length > 0 && <Box marginTop={"l"} paddingHorizontal={"m"} gap={"m"}>
                    <Text variant={"title"}>30 Minutes Food</Text>
                    <FlatList data={foods} renderItem={({item}) => <FullCard item={item}  onTap={handleFoodTap}/>} horizontal />
                </Box>}

            </ScrollView>
        </SafeAreaView>

    );
}

const mapStateToProps = (state: ApplicationState) => ({
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
});
const Home = connect(mapStateToProps, { onAvailability })(_Home);

export default Home;
