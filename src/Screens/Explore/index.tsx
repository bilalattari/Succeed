import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";
import { Text, SportsList, ExploreCard } from "../../Common";
import { filter_Icon, padal_Icon, pingpong_Icon, running_Icon, tennis_Icon } from "../../Assets/Icons";
const list = [
    {
        active: true,
        icon: padal_Icon,
        text: 'Padel',
    },
    {
        active: false,
        icon: pingpong_Icon,
        text: 'Ping Pong',
    },
    {
        active: false,
        icon: tennis_Icon,
        text: 'Tennis',
    },
    {
        active: false,
        icon: running_Icon,
        text: 'Running',
    },
]
const cardList = [
    {
        username: 'George Fredrik',
        type: 'Badminton',
        sportname: 'Botkyrka Rackethall',
        location: 'Humlevägen 3, Stockholm',
        date: 'Mon, 15 October, 2020',
        time: '11:00 am - 1:00 pm',
        price: 'Free'
    },
    {
        username: 'George Fredrik',
        type: 'Badminton',
        sportname: 'Botkyrka Rackethall',
        location: 'Humlevägen 3, Stockholm',
        date: 'Mon, 15 October, 2020',
        time: '11:00 am - 1:00 pm',
        price: 'Free'
    },
    {
        username: 'George Fredrik',
        type: 'Badminton',
        sportname: 'Botkyrka Rackethall',
        location: 'Humlevägen 3, Stockholm',
        date: 'Mon, 15 October, 2020',
        time: '11:00 am - 1:00 pm',
        price: 'Free'
    },
    {
        username: 'George Fredrik',
        type: 'Badminton',
        sportname: 'Botkyrka Rackethall',
        location: 'Humlevägen 3, Stockholm',
        date: 'Mon, 15 October, 2020',
        time: '11:00 am - 1:00 pm',
        price: 'Free'
    },
    {
        username: 'George Fredrik',
        type: 'Badminton',
        sportname: 'Botkyrka Rackethall',
        location: 'Humlevägen 3, Stockholm',
        date: 'Mon, 15 October, 2020',
        time: '11:00 am - 1:00 pm',
        price: 'Free'
    },

]
const Explore = ({ navigation }) => {
    const [filters, setFilters] = useState(list)

    const applyFilter = (index) => {
        let filterList = filters
        filterList[index].active = !filterList[index].active
        setFilters([...filterList]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.dummy} />
                    <Text style={styles.headertxt}>Explore</Text>
                    <TouchableOpacity>
                        <SvgXml xml={filter_Icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SportsList navigation={navigation} filterFunction={(ind) => applyFilter(ind)} list={list} />
                </View>

                <View style={styles.cardview}>
                    <ExploreCard navigation={navigation} list={cardList} />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F6F8', },
    header: { padding: 20, backgroundColor: '#FFF', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    headertxt: { fontSize: 20, },
    dummy: { width: 30, height: 30, },
    cardview: { paddingHorizontal: 20 },
})
export default Explore;