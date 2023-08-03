import React, {useState} from "react";
import {Box} from "./ThemeProvider";
import {StyleSheet, TextInput, Image, View} from "react-native";

interface SearchBarProps {
    placeholder?: string;
    onTextChange: Function,
    onFocus?: any | undefined,
}
const SearchBar: React.FC<SearchBarProps> = ({placeholder, onTextChange, onFocus}) => {


    return (
        <Box>
            <Box backgroundColor={"cardBackground"} borderColor={"mainBorder"} borderWidth={1} flexDirection={'row'} alignItems={'center'} paddingHorizontal={"l"} borderRadius={20}>
                <Image source={require('../assets/images/search.png')} style={styles.searchIcon}/>
                <TextInput style={styles.input} placeholder={placeholder} onChangeText={(val) => onTextChange(val)} returnKeyType={"search"} onFocus={onFocus} />
            </Box>

        </Box>
    );
}

export default SearchBar;
const styles = StyleSheet.create({
    input: {
        width: '70%',
        paddingVertical: 4,
        marginLeft: 5,
        fontSize: 20,
    },
    searchIcon: {
        width: 25,
        height: 25
    }


})
