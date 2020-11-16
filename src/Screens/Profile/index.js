import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import { walletsmall, backarrowblack, clock, squash, padal_Icon, pingpong_Icon, tennis_Icon, running_Icon, locationindicator, shareicon, typeblue, typebluesmall } from "../../Assets/Icons";
import SportImage from "../../Assets/sportimage.png";
import Avatar from "../../Assets/avatar.png";
const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: 70 }} showsVerticalScrollIndicator={false} >

                <View style={styles.topHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <SvgXml xml={backarrowblack} />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Member Profile</Text>
                    <TouchableOpacity>
                        <SvgXml style={{ opacity: 0 }} xml={typeblue} />
                    </TouchableOpacity>
                </View>


                <View style={styles.detailview}>
                    <Image style={styles.avatar} source={Avatar} />
                    <Text style={styles.heading}>Jacob Johansson</Text>
                    <Text style={styles.subheading}>Age: 22</Text>
                    <TouchableOpacity style={styles.profilebtn}>
                        <Text style={styles.profiletxt}>Connect</Text>
                    </TouchableOpacity>
                    <Text style={[styles.subheading, { textAlign: 'left', marginHorizontal: 15, marginVertical: 20, }]}>Hi, I'm Jacob. I have just moved to Stockholm recently for my Master degree. I love playing Padel and Ping Pong. I'm quite social and love trying new things :)</Text>

                </View>

                <View style={{ paddingVertical: 5, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.subheading}>Sessions</Text>
                    <Text style={[styles.subheading, { color: '#0078FF' }]}>5 Active</Text>
                </View>

                <View style={{ backgroundColor: '#FFF' }}>
                    <FlatList contentContainerStyle={{ padding: 20, }} horizontal={true} showsHorizontalScrollIndicator={false} data={[1, 2, 3, 4, 5, 6]} renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                <View style={styles.imgview}>
                                    <Image style={styles.sportimage} source={SportImage} />
                                    <View>
                                        <Text style={styles.headertxt}>Tennis</Text>
                                        <Text style={styles.subtxt}>Royal TennishAllan</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <SvgXml xml={locationindicator} />
                                            <Text style={styles.subheading}> 1.2 km from you</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.priceview}>
                                    <SvgXml xml={walletsmall} />
                                    <Text style={styles.price}>{'Free'}</Text>
                                </View>

                                <View style={styles.bottomview}>
                                    <Text style={styles.date}>15 Oct, 2020</Text>
                                    <View style={styles.timeview}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <SvgXml xml={clock} />
                                            <Text style={styles.timeheadtxt}>Anytime Between</Text>
                                        </View>
                                        <Text style={styles.timetxt}>11:00 am - 1:00 pm</Text>
                                    </View>
                                </View>

                            </View>
                        )
                    }} />
                </View>

                <View style={{ paddingVertical: 5, marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.subheading}>Skills & Level</Text>
                </View>

                <View style={{ backgroundColor: '#FFF', padding: 10, }}>


                    <View style={styles.sportview}>
                        <View style={styles.sportname}>
                            <SvgXml xml={padal_Icon} />
                            <Text style={styles.sportnametxt}>Padel</Text>
                        </View>
                        <View style={styles.sportposition}>
                            <SvgXml xml={typebluesmall} />
                            <Text style={styles.sportnametxt}>Expert</Text>
                        </View>
                    </View>

                    <View style={styles.sportview}>
                        <View style={styles.sportname}>
                            <SvgXml xml={squash} />
                            <Text style={styles.sportnametxt}>Squash</Text>
                        </View>
                        <View style={styles.sportposition}>
                            <SvgXml xml={typebluesmall} />
                            <Text style={styles.sportnametxt}>Intermediary</Text>
                        </View>
                    </View>

                    <View style={styles.sportview}>
                        <View style={styles.sportname}>
                            <SvgXml xml={pingpong_Icon} />
                            <Text style={styles.sportnametxt}>Ping pong</Text>
                        </View>
                        <View style={styles.sportposition}>
                            <SvgXml xml={typebluesmall} />
                            <Text style={styles.sportnametxt}>Expert</Text>
                        </View>
                    </View>

                    <View style={styles.sportview}>
                        <View style={styles.sportname}>
                            <SvgXml xml={tennis_Icon} />
                            <Text style={styles.sportnametxt}>Tennis</Text>
                        </View>
                        <View style={styles.sportposition}>
                            <SvgXml xml={typebluesmall} />
                            <Text style={styles.sportnametxt}>Beginner</Text>
                        </View>
                    </View>

                    <View style={styles.sportview}>
                        <View style={styles.sportname}>
                            <SvgXml xml={running_Icon} />
                            <Text style={styles.sportnametxt}>Running</Text>
                        </View>
                        <View style={styles.sportposition}>
                            <SvgXml xml={typebluesmall} />
                            <Text style={styles.sportnametxt}>Expert</Text>
                        </View>
                    </View>




                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    sportimage: { marginRight: 5, resizeMode: 'cover', borderRadius: 10, width: 90, height: 70, },
    topHeader: { paddingHorizontal: 15, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    headertxt: { fontSize: 18, color: '#000', fontFamily: 'AvenirNext-Regular' },
    detailview: { marginTop: 60, backgroundColor: '#FFF' },
    avatar: { resizeMode: 'contain', marginTop: -60, width: 120, height: 120, alignSelf: 'center' },
    heading: { textAlign: 'center', marginVertical: 5, fontSize: 25, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    subheading: { textAlign: 'center', marginVertical: 5, fontSize: 13, color: '#7D7F8D', fontFamily: 'AvenirNext-Regular' },
    profilebtn: { alignSelf: 'center', width: 130, height: 35, marginTop: 10, backgroundColor: '#0078FF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    profiletxt: { fontSize: 16, color: '#FFF', fontFamily: 'AvenirNext-Regular' },

    card: { marginRight: 10, overflow: 'hidden', backgroundColor: '#F5F6F8', borderRadius: 20, borderRadius: 10, },
    imgview: { marginTop: 10, alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row' },
    subtxt: { fontSize: 12, color: '#0078FF', fontFamily: 'AvenirNext-Regular' },
    priceview: { alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10, marginTop: 5 },
    price: { fontSize: 12, marginLeft: 5, color: '#363232', fontFamily: 'AvenirNext-Regular' },

    bottomview: { alignItems: 'center', padding: 10, marginTop: 10, width: '100%', backgroundColor: '#E4E6ED', flexDirection: 'row', },
    date: { flex: 2, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    timeview: { flex: 1.5 },
    timetxt: { marginTop: 5, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    timeheadtxt: { marginLeft: 5, fontSize: 10, color: '#363232', fontFamily: 'AvenirNext-Regular' },

    sportview: { marginVertical: 10, overflow: 'hidden', borderRadius: 13, borderWidth: 1, borderColor: '#D6D9E7', flexDirection: 'row', },
    sportname: { padding: 10, flexDirection: 'row', alignItems: 'center', flex: 1.5 },
    sportposition: { borderLeftColor: '#D6D9E7', borderLeftWidth: 1, padding: 10, backgroundColor: '#F5F6F8', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 },
    sportnametxt: { marginLeft: 5, fontSize: 16, color: '#363232', fontFamily: 'AvenirNext-Regular' },
})
export default Profile;