import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { Colors } from "../../Styles";

const Touchable = ({ onPress, children }) =>
    (<TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(Colors.BG_LIGHT_GRAY)}>
        {children}
    </TouchableNativeFeedback>)

export default Touchable;