import React, { useState } from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

export interface Props {
    list?: any;
    filterFunction?: any;
    navigation?: any
}

const SportsList = ({ list, filterFunction }: Props) => {
    return (
        <FlatList horizontal={true} data={list}
            contentContainerStyle={styles.listcontainer}
            showsHorizontalScrollIndicator={false} style={styles.list}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity key={index}
                        onPress={() => filterFunction(index)}
                        style={item.active ? styles.active : styles.item}>
                        <SvgXml xml={item.icon} />
                        <Text style={styles.txt}>{item.text}</Text>
                    </TouchableOpacity>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    list: { backgroundColor: '#FFF', },
    listcontainer: { paddingLeft: 20, paddingVertical: 20 },
    item: { borderRadius: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 5, height: 40, backgroundColor: '#F5F6F8' },
    active: { borderWidth: 1, borderColor: '#0062FF', borderRadius: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 5, height: 40, backgroundColor: '#F5F6F8' },
    txt: { marginLeft: 5, fontSize: 15, fontFamily: 'AvenirNext-Regular' },

})

export default SportsList;