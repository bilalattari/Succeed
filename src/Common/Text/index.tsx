import React from "react";
import { StyleSheet, Text } from "react-native";
import { Typography } from "../../Styles";

const CustomText = ({ children, style, numberOfLines }: any) => {
    return <Text numberOfLines={numberOfLines} style={[styles.textStyle, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'AvenirNext-Regular'
    }
})

export default CustomText;