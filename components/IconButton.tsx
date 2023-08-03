import React from "react";
import {StyleSheet, TouchableOpacity, Image, ImageSourcePropType} from "react-native";
import {Box} from "./ThemeProvider";

interface Props {
    source: ImageSourcePropType,
    width: number,
    height: number,
    onTap: Function
}

const IconButton: React.FC<Props> = ({source, width, height, onTap}) => {
    return (
        <TouchableOpacity onPress={() => onTap()}>
            <Box>
                <Image source={source} style={[styles.imageStyle,  {width, height}]} />
            </Box>
        </TouchableOpacity>
    );
}

export default IconButton;
const styles = StyleSheet.create({
    imageStyle: {
        width: 30,
        height: 40
    }
})
