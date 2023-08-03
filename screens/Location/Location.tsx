import React, {useEffect, useState} from "react";
import {SafeAreaView, Image, View, Animated, StyleSheet} from "react-native";
import GlobalStyles from "../../assets/styles/globalStyles";
import {Box, Text} from "../../components/ThemeProvider";
import * as Location from 'expo-location';
import {LocationGeocodedAddress} from "expo-location/src/Location.types";
import add = Animated.add;
import {horizontalScale, verticalScale} from "../../assets/styles/scale";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackNavigatorParams} from "../../navigation/MainNavigation";
import {NavigationProp} from "@react-navigation/native";
import {ApplicationState, onUpdateLocation, UserState} from "../../redux";
import {connect} from "react-redux";

type Props = {
    navigation: NavigationProp<StackNavigatorParams>,
    onUpdateLocation: Function,
    userReducer: UserState
}
const _LocationScreen: React.FC<Props> = ({navigation, onUpdateLocation, userReducer}) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [location, setLocation] = useState<LocationGeocodedAddress>();
    const [displayAddress, setDisplayAddress] = useState("");

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const getLocation = async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status != "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            const { coords } = location;

            if(coords) {
                const addressResponse = await Location.reverseGeocodeAsync(coords);
                const userAddress = addressResponse[0];
                setLocation(userAddress);
                const addressOfUser = `${userAddress.name}, ${userAddress.postalCode}, ${userAddress.country}`
                setDisplayAddress(addressOfUser);
                console.log("Update address in reducer");
                onUpdateLocation(userAddress);
                timeout  = setTimeout(() => {
                    //navigation.navigate(Routes.TabNavigation);
                    navigation.navigate("TabNavigation");
                }, 3000);
            }
        }
        getLocation();
        return () => {
            console.log('Destroy here');
            clearTimeout(timeout);
        };
    },[])
    return (
        <SafeAreaView style={[GlobalStyles.flexStyle, GlobalStyles.backgroundWhite, styles.container]}>
            <Box flex={1} backgroundColor={"mainBackground"} alignItems={"center"} justifyContent={"center"}>
                <Image source={require('../../assets/images/delivery_icon.png')} style={styles.image}/>
                <Box marginVertical={"l"} justifyContent={'center'} alignItems={'center'} borderBottomColor={'tertiary'} borderBottomWidth={1}>
                    <Text variant={"title"}>{'Your Delivery Address'}</Text>
                </Box>
                <Box justifyContent={'center'} alignItems={'center'} width={'70%'}>
                    <Text variant={"subtitle"}>{displayAddress.length > 0 ? displayAddress : 'Searching for your location ...'}</Text>
                </Box>
            </Box>
        </SafeAreaView>
    );
}
const mapStateToProps = (state: ApplicationState) => ({
    userReducer: state.userReducer
});
const LocationScreen = connect(mapStateToProps, { onUpdateLocation })(_LocationScreen);
export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: verticalScale(100),
        width: horizontalScale(100)
    },
    textContainer: {
        borderBottomWidth: 1,
    }
});
