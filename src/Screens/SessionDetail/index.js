import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import { backarrow, clock, locationicon, shareicon, typeblue, typebluesmall } from "../../Assets/Icons";
import SportImage from "../../Assets/sportimage.png";
import Avatar from "../../Assets/avatar.png";
const SessionDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false} >
                    <Image style={styles.sportimage} source={SportImage} />
                    <View style={styles.topHeader}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <SvgXml xml={backarrow} />
                        </TouchableOpacity>
                        <Text style={styles.headertxt}>Basketball Session</Text>
                        <TouchableOpacity>
                            <SvgXml xml={typeblue} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomcontainer}>
                        <TouchableOpacity style={styles.typetho}>
                            <Text style={styles.typetxt}>Badminton</Text>
                        </TouchableOpacity>

                        <View style={styles.bottomview}>
                            <View style={styles.dateview}>
                                <Text style={styles.datetxt}>{'Mon, 15 October, 2020'}</Text>
                            </View>
                            <View style={{ width: 2, height: '100%', backgroundColor: '#FFF' }} />
                            <View style={styles.timeview}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <SvgXml xml={clock} />
                                    <Text style={styles.timeheadtxt}>Anytime Between</Text>
                                </View>
                                <Text style={styles.timetxt}>{'11:00 am - 1:00 pm'}</Text>
                            </View>
                        </View>

                        <View style={styles.detailcontainer}>
                            <Text style={styles.heading}>Botkyrka Rackethall</Text>
                            <Text style={styles.subheading}>Humlevägen 3, Stockholm</Text>
                            <Text style={styles.heading}>Location 2</Text>
                            <Text style={styles.subheading}>Humlevägen 3, Stockholm</Text>
                        </View>


                        <TouchableOpacity style={styles.locationbtn}>
                            <SvgXml xml={locationicon} />
                            <Text style={styles.locationtxt}>Get Direction</Text>
                        </TouchableOpacity>

                        <View style={styles.personaldetail}>
                            <View style={styles.genderview}>
                                <Text style={styles.title}>Gender</Text>
                                <Text style={styles.value}>All Gender</Text>
                                <Text style={styles.title}>(16-40)</Text>
                            </View>
                            <View style={[styles.genderview, { borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#D8D8E3' }]}>
                                <Text style={styles.title}>Level/Skill</Text>
                                <Text style={styles.value}>Expert</Text>
                            </View>
                            <View style={styles.genderview}>
                                <Text style={styles.title}>Joining Fee</Text>
                                <Text style={styles.value}>Free</Text>
                            </View>


                        </View>

                        <View style={styles.decsview}>
                            <Text style={styles.deschead}>Description</Text>
                            <Text style={styles.desctxt}>Hej!, I'm planning to play a match soon around lunch time, can only afford to play during lunch break. Join me and let's break some sweat before a productive afternoon!</Text>
                        </View>



                    </View>

                    <View style={styles.profileview}>
                        <Text style={styles.sessiontxt}>Session Creator</Text>
                        <View style={styles.avatarview}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.avatar} source={Avatar} />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={styles.name}>John Johansson</Text>
                                    <View style={styles.typesmallview}>
                                        <SvgXml style={{ marginRight: 5 }} xml={typebluesmall} />
                                        <Text style={styles.title}>Badminton Expert</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Profile')}
                                style={styles.profilebtn}>
                                <Text style={styles.profiletxt}>View Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.prodesc}>Hi I am John. I love sports. I mostly love basketball. Me
                        my friend has owned a club for basketball. Everyone
Who wants to play can join us. Thank you. </Text>
                    </View>



                </ScrollView>
                <View style={styles.bottombar}>
                    <TouchableOpacity style={styles.shareicon}>
                        <SvgXml xml={shareicon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.joinbtn}>
                        <Text style={styles.jointxt}>Join Session</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    sportimage: { resizeMode: 'cover', width: '100%', height: 200, },
    topHeader: { position: 'absolute', top: 10, left: 0, right: 0, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    bottomcontainer: { marginTop: -20, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#FFF', padding: 20, },
    headertxt: { fontSize: 18, color: '#FFF', fontFamily: 'AvenirNext-DemiBold' },
    typetho: { alignSelf: 'flex-end', marginTop: -35, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, width: 100, height: 30, borderRadius: 40, paddingVertical: 5, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#0078FF' },
    typetxt: { color: '#0062FF' },
    bottomview: { borderRadius: 10, alignItems: 'center', marginTop: 10, width: '100%', backgroundColor: '#E4E6ED', flexDirection: 'row', },
    dateview: { padding: 10, flex: 1.7, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    datetxt: { fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    timeview: { padding: 10, flex: 1.5 },
    timetxt: { marginTop: 5, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-DemiBold' },
    timeheadtxt: { marginLeft: 5, fontSize: 10, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    detailcontainer: { padding: 10, justifyContent: 'center', alignItems: 'center', },
    heading: { marginVertical: 5, fontSize: 20, color: '#363232', fontFamily: 'AvenirNext-DemiBold' },
    subheading: { marginVertical: 5, fontSize: 13, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    locationbtn: { alignSelf: 'center', flexDirection: 'row', width: 120, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0078FF', borderRadius: 10, },
    locationtxt: { fontSize: 13, marginLeft: 3, color: '#FFF', fontFamily: 'AvenirNext-Regular' },
    personaldetail: { paddingBottom: 30, borderBottomWidth: 1, borderBottomColor: '#E9E9F0', marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' },
    genderview: { flex: 1, alignItems: 'center' },
    title: { fontSize: 12, marginBottom: 5, color: '#7D7F8D', fontFamily: 'AvenirNext-Regular' },
    value: { fontSize: 14, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    decsview: { paddingVertical: 10, },
    deschead: { fontSize: 14, color: '#7D7F8D', marginBottom: 10, fontFamily: 'AvenirNext-Regular' },
    desctxt: { fontSize: 14, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    bottombar: { position: 'absolute', bottom: 0, padding: 15, borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#FFF', flexDirection: 'row' },
    shareicon: { width: 50, height: 50, backgroundColor: '#E7EAF0', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    joinbtn: { marginLeft: 10, backgroundColor: '#0078FF', flex: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    jointxt: { fontSize: 18, color: '#FFF', fontFamily: 'AvenirNext-Regular' },
    profileview: { paddingHorizontal: 15, paddingVertical: 10, },
    sessiontxt: { fontSize: 15, color: '#7D7F8D', fontFamily: 'AvenirNext-Regular' },
    avatarview: { marginTop: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
    typesmallview: { flexDirection: 'row', alignItems: 'center' },
    profilebtn: { paddingHorizontal: 10, height: 40, marginLeft: 10, backgroundColor: '#0078FF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    profiletxt: { fontSize: 15, color: '#FFF', fontFamily: 'AvenirNext-Regular' },
    avatar: { resizeMode: 'contain', width: 50, height: 50 },
    name: { fontSize: 18, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    prodesc: { fontSize: 14, marginTop: 10, color: '#5A6088', fontFamily: 'AvenirNext-Regular' },
})
export default SessionDetail;