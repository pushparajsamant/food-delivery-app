import React from "react";
import {Box, Text} from "./ThemeProvider";
import IconButton from "./IconButton";
import {ImageSourcePropType, Image} from "react-native";
interface Props  {
    onTap: Function;
    title: string
    iconRight?: ImageSourcePropType
}

const Header: React.FC<Props> = ({title,onTap, iconRight}) => {
    //console.log(onTap);
    return (
      <Box flexDirection={"row"} alignItems={"center"} marginHorizontal={"m"} justifyContent={"space-between"} marginVertical={"m"} >
          <IconButton source={require('../assets/images/back_arrow.png')} width={20} height={20} onTap={onTap} />
          <Text variant={"title"} color={"primary"}>{title}</Text>
          <Box>
              {iconRight && <Image source={iconRight}></Image>}
          </Box>
      </Box>
    );
}
export default Header;
