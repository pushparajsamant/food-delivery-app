import React, {useState} from "react";
import {Box} from "../components/ThemeProvider";
import SearchBar from "../components/SearchBar";
import {SafeAreaView} from "react-native";

const Search = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (value: React.SetStateAction<string>) => {
        console.log(value);
        setSearch(value);
    }
    return(
        <SafeAreaView>
            <Box>
                <SearchBar placeholder={'Search Foods'} onTextChange={(val: React.SetStateAction<string>) => handleSearch(val)}/>
            </Box>
        </SafeAreaView>
    );
}

export default Search;
