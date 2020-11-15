import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Typography } from "../../Styles";
import { Text, Touchable } from "..";


const Button = ({ theme, style, onPress, children }) => {

    return <Touchable onPress={onPress}>
        <View style={[styles.container, styles[theme], style]}>
            <Text style={[textStyles.defaultText, textStyles[theme]]}>{children}</Text>
        </View >
    </Touchable>
}

const styles = StyleSheet.create({
    container: { width: 150, paddingVertical: 7, borderRadius: 20, overflow: 'hidden' },
    blue: { backgroundColor: Colors.BLUE },
    white: { backgroundColor: '#fff', borderWidth: 1, borderColor: Colors.BLUE }
})
const textStyles = StyleSheet.create({
    defaultText: { textAlign: 'center', color: '#000', fontFamily: Typography.FONT_FAMILY_SEMI_BOLD, fontSize: 18 },
    blue: { color: '#fff' },
    white: { color: Colors.BLUE }
})

export default Button;