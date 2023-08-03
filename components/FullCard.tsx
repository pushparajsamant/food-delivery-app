import React from "react";
import {Dimensions, Image, ImageSourcePropType, StyleSheet, TouchableOpacity} from "react-native";
import {Box, Text} from "./ThemeProvider";
import {horizontalScale, verticalScale} from "../assets/styles/scale";
import home from "../screens/Home";
import {FoodModel, Restaurant} from "../redux";
interface Props {
    item: Restaurant | FoodModel ,
    onTap: Function
}
const SCREEN_WIDTH = Dimensions.get("window").width;
const FullCard: React.FC<Props> = ({item, onTap}) => {
    return (<TouchableOpacity onPress={() => onTap(item)}>
        <Image source={{uri: item.images[0]}} style={styles.image} resizeMode={'cover'}/>
    </TouchableOpacity>);
}

export default FullCard;
const styles = StyleSheet.create({
    image: {
        width: horizontalScale(SCREEN_WIDTH - 80),
        height: verticalScale(180),
        borderRadius: horizontalScale(20),
        marginHorizontal: horizontalScale(10)
    }
})
