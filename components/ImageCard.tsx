import React from "react";
import {Category} from "../redux";
import {TouchableOpacity, Image, StyleSheet} from "react-native";
import {Box, Text} from "./ThemeProvider";
import {horizontalScale, verticalScale} from "../assets/styles/scale";
import home from "../screens/Home";

interface Props {
    item: Category,
    onTap?: Function
}

const ImageCard: React.FC<Props> = ({item, onTap}) => {
    return (
        <TouchableOpacity onPress={() => onTap}>
            <Box marginHorizontal={"m"} alignItems={"center"} gap={"s"}>
                <Image source={{uri: item.icon}} style={styles.image}/>
                <Text variant={"smallbody"}>{item.title}</Text>
            </Box>
        </TouchableOpacity>
    );
}
export default ImageCard;
const styles = StyleSheet.create({
    image: {
        height: verticalScale(70),
        width: horizontalScale(80),
        borderRadius: horizontalScale(20)
    }
})
