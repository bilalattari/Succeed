import React from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, Image, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { setting_Icon, wallet, type, clock, } from "../../Assets/Icons";
import Avatar from "../../Assets/avatar.png";
import sportimage from "../../Assets/sportimage.png";

const ExploreCard = ({navigation, list }) =>
    (
        <FlatList data={list} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listcontain} style={styles.list} renderItem={({ item, index }) => {
            return (
                <TouchableOpacity key={index} style={styles.item}>

                    <View style={styles.cardheader}>
                        <View style={styles.avaName}>
                            <Image style={styles.avatar} source={Avatar} />
                            <View>
                                <Text style={styles.name}>{item.username}</Text>
                                <Text style={styles.subtxt}>Offering to join the session</Text>
                            </View>
                        </View>
                        <SvgXml xml={setting_Icon} />
                    </View>

                    <View style={styles.lowercard}>
                        <Image style={styles.sportimg} source={sportimage} />
                        <View style={styles.typeview}>
                            <SvgXml xml={type} />
                            <Text style={styles.typetxt}>{item.type}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('SessionDetail')}} style={styles.joinbtn}>
                            <Text style={styles.btntxt}>Join</Text>
                        </TouchableOpacity>
                        <Text style={styles.sportname}>{item.sportname}</Text>
                        <Text style={styles.location}>{item.location}</Text>

                        <View style={styles.priceview}>
                            <SvgXml xml={wallet} />
                            <Text style={styles.price}>{item.price}</Text>
                        </View>

                        <View style={styles.bottomview}>
                            <Text style={styles.date}>{item.date}</Text>
                            <View style={styles.timeview}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <SvgXml xml={clock} />
                                    <Text style={styles.timeheadtxt}>Anytime Between</Text>
                                </View>
                                <Text style={styles.timetxt}>{item.time}</Text>
                            </View>
                        </View>

                    </View>


                </TouchableOpacity>
            )
        }} />
    )

const styles = StyleSheet.create({
    list: {  },
    listcontain: { paddingBottom: 240 },
    item: { marginVertical: 20, },
    name: { fontSize: 16, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    sportname: { fontSize: 18, marginLeft: 10, marginTop: 5, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    location: { fontSize: 13, marginLeft: 10, marginTop: 5, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    subtxt: { fontSize: 13, color: '#A1A3B2', fontFamily: 'AvenirNext-Regular' },
    cardheader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
    avatar: { resizeMode: 'contain', width: 50, height: 50, marginRight: 10 },
    avaName: { flexDirection: 'row', alignItems: 'center' },
    lowercard: { marginTop: 10, overflow: 'hidden', borderRadius: 10, backgroundColor: '#FFF', },
    sportimg: { height: 90, backgroundColor: 'grey', width: '100%' },
    joinbtn: { alignSelf: 'flex-end', marginRight: 10, marginTop: -25, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#0078FF', width: 80, borderRadius: 10, },
    btntxt: { fontSize: 18, color: '#FFF', fontFamily: 'AvenirNext-Regular' },
    priceview: { flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10, marginTop:30, },
    price: { fontSize: 15, marginLeft: 5, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    typeview: { position: 'absolute', top: 10, left: 10, flexDirection: 'row', alignItems: 'center', },
    typetxt: { marginLeft: 5, backgroundColor: '#FFFFFF35', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 30, fontSize: 15, color: '#FFF', fontFamily: 'AvenirNext-Regular' },
    bottomview: { alignItems: 'center', padding: 10, marginTop: 10, width: '100%', backgroundColor: '#E4E6ED', flexDirection: 'row', },
    date: { flex: 2, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    timeview: { flex: 1.5 },
    timetxt: {marginTop:5, fontSize: 12, color: '#363232', fontFamily: 'AvenirNext-Regular' },
    timeheadtxt: { marginLeft: 5, fontSize: 10, color: '#363232', fontFamily: 'AvenirNext-Regular' },
})

export default ExploreCard;