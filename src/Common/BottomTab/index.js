import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { bottomtab, exploreicon, chaticon, profileicon, notificationicon, middleicon } from "../../Assets/Icons";
import { SvgXml } from "react-native-svg";
import BottomTabBarImage from "../../Assets/bottombar.png";


const BottomTab = ({ navigation }) => {

    return (
        <View style={styles.main}>
            <Image style={styles.tabimg} source={BottomTabBarImage} />
            {/* <SvgXml xml={bottomtab} /> */}

            <View style={styles.iconcontainer}>

                <View style={styles.twoiconview}>
                    <TouchableOpacity style={styles.bottomicons}>
                        {/* <Image style={styles.iconimg} source={require('../../images/bottomnavigationstoreicon.png')} /> */}
                        <SvgXml xml={exploreicon} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomicons}>
                        {/* <Image style={styles.iconimg} source={require('../../images/bottomnavigationwishlisticon.png')} /> */}
                        <SvgXml xml={notificationicon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.middleview} />


                <View style={styles.twoiconview}>
                    <TouchableOpacity style={styles.bottomicons}>
                        {/* <Image style={styles.iconimg} source={require('../../images/bottomnavigationiconcategory.png')} /> */}
                        <SvgXml xml={chaticon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.bottomicons}>
                        {/* <Image style={styles.iconimg} source={require('../../images/bottomnavigationprofileicon.png')} /> */}
                        <SvgXml xml={profileicon} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.gradientview}>
                <TouchableOpacity onPress={() => { navigation.navigate('CreateSession') }} style={styles.middileicontho}>
                    {/* <Image style={styles.iconimg} source={require('../../images/bottomnavigationhomeicon.png')} /> */}
                    <SvgXml xml={middleicon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: { justifyContent: 'center', alignItems: 'center', height: 100, position: 'absolute', bottom: -30, left: 0, right: 0 },
    tabimg: { resizeMode: 'stretch', width: '110%', height: 100, },
    iconcontainer: { width: '100%', zIndex: 0, position: 'absolute', bottom: 40, flexDirection: 'row', justifyContent: 'space-between' },
    twoiconview: { flex: 2, flexDirection: 'row', justifyContent: 'space-around' },
    bottomicons: { zIndex: +10000000, height: 40, flex: 1, justifyContent: 'center', alignItems: 'center', },
    iconimg: { resizeMode: 'contain', width: 25, height: 25, },
    middleview: { flex: 1, zIndex: -10000000, opacity: 0, },
    middileiconview: { left: 0, right: 0, bottom: 35, position: 'absolute', justifyContent: 'center', alignItems: 'center', },
    middileicontho: { padding: 15, flex: 1, zIndex: +10000, justifyContent: 'center', alignItems: 'center' },
    gradientview: {
        width: 60, height: 60, borderRadius: 100, zIndex: +10000,
        bottom: 51, position: 'absolute', justifyContent: 'center', alignItems: 'center',
    },

})


export default BottomTab;