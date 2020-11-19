import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { SvgXml } from "react-native-svg";
import { SportsList, DatePicker, TimePicker } from "../../Common";
import { locationadd, backarrowblack, downarrow, squash, padal_Icon, pingpong_Icon, tennis_Icon, running_Icon, locationindicator, shareicon, typeblue, typebluesmall, badge_0, badge_1, badge_2, badge_3 } from "../../Assets/Icons";
// import SportImage from "../../Assets/sportimage.png";
// import Avatar from "../../Assets/avatar.png";
import CheckBox from 'react-native-check-box';


import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

let listSkillAndLevel = [
    {
        active: false,
        icon: badge_3,
        text: 'Expert'
    },
    {
        active: false,
        icon: badge_2,
        text: 'Intermediary'
    },
    {
        active: false,
        icon: badge_1,
        text: 'Beginner'
    },
    {
        active: false,
        icon: badge_0,
        text: 'First Time'
    },
    {
        active: false,
        text: 'All'
    },
]
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
const CreateSession = ({ navigation }: any) => {
    const [age, setAge] = useState('Example 20 - 40');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [addressArr, setAddressArr] = useState(['']);
    const [filters, setFilters] = useState(list)
    const [skillLevelReq, setSkillLevelReq] = useState(listSkillAndLevel);



    const onPressSkillLevel = (item, index) => {
        let copySkillLevelReq = skillLevelReq;
        copySkillLevelReq[index].active = !copySkillLevelReq[index].active
        setSkillLevelReq([...copySkillLevelReq]);
    }

    const applyFilter = (index) => {
        let filterList = filters
        filterList[index].active = !filterList[index].active
        setFilters([...filterList]);
    }

    const onSubmitAddress = (index) => {
        let allAddress = addressArr;
        allAddress.push(address);
        setAddress('');
        setAddressArr([...allAddress]);
    }

    const onChangeAddress = (text, index) => {
        let allAddress = addressArr;
        allAddress[index] = text;
        setAddressArr([...allAddress]);
    }
    console.log("CreateSession -> addressArr", addressArr)

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.containcont} showsVerticalScrollIndicator={false} >

                <View style={styles.topHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <SvgXml xml={backarrowblack} />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Create Session</Text>
                    <TouchableOpacity>
                        <SvgXml style={{ opacity: 0 }} xml={typeblue} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.subheading}>Sports</Text>
                    <SportsList navigation={navigation} filterFunction={(ind) => applyFilter(ind)} list={filters} />
                    <Text style={styles.subheading}>Date</Text>

                    <DatePicker />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.subheading}>Time</Text>
                        <Text style={styles.subheadinggreen}>(Possible play time between)</Text>
                    </View>
                    <TimePicker />
                    <Text style={styles.subheading}>Location</Text>
                    <FlatList
                        data={addressArr}
                        renderItem={({ item, index }) => {
                            return (<TouchableOpacity style={styles.addlocationview}>
                                <TextInput
                                    onChangeText={(text) => onChangeAddress(text, index)}
                                    style={styles.textinputlocation}
                                    placeholder={'Add the Session Location'}
                                    placeholderTextColor={'#A7A9BC'}
                                    onSubmitEditing={onSubmitAddress}
                                    value={item}
                                />
                                <View style={styles.iconview}>
                                    <SvgXml xml={locationadd} />
                                </View>
                            </TouchableOpacity>)
                        }}
                    />


                    <Text style={styles.subheading}>Gender</Text>

                    <View style={styles.checkboxview}>
                        <CheckBox
                            checkedCheckBoxColor={'#0078FF'}
                            checkBoxColor={'#A7A9BC'}
                            onClick={() => { setGender('male') }}
                            style={{ flex: 1, padding: 10, }}
                            isChecked={gender == 'male' ? true : false}
                            rightText={"Male"}
                        />
                        <CheckBox
                            checkedCheckBoxColor={'#0078FF'}
                            checkBoxColor={'#A7A9BC'}
                            onClick={() => { setGender('female') }}
                            style={{ flex: 1, padding: 10, }}
                            isChecked={gender == 'female' ? true : false}
                            rightText={"Female"}
                            rightTextStyle={{ fontSize: 16, color: '#363232' }}
                        />
                        <CheckBox
                            checkedCheckBoxColor={'#0078FF'}
                            checkBoxColor={'#A7A9BC'}
                            onClick={() => { setGender('others') }}
                            style={{ flex: 1, padding: 10, }}
                            isChecked={gender == 'others' ? true : false}
                            rightText={"Others"}
                            rightTextStyle={{ fontSize: 16, color: '#363232' }}
                        />
                    </View>
                    <Text style={styles.subheading}>Age Requirement</Text>
                    <DropDownPicker
                        items={[
                            { label: '10 - 20', value: '10 - 20' },
                            { label: '30 - 40', value: '30 - 40' },
                            { label: '50 - 60', value: '50 - 60' },
                            { label: 'Example 20 - 40', value: 'Example 20 - 40' },
                        ]}
                        defaultValue={age}
                        placeholderStyle={{ color: '#A7A9BC' }}
                        placeholder='Example 20 - 40'
                        containerStyle={{ marginVertical: 10, marginHorizontal: 15, height: 40 }}
                        style={{ borderWidth: 0, borderBottomWidth: 1, backgroundColor: '#FFF' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        customArrowDown={() => { return <SvgXml xml={downarrow} /> }}
                        customArrowUp={() => { return <SvgXml xml={downarrow} /> }}
                    />

                    <Text style={styles.subheading}>Level/Skill Requirement</Text>

                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: 15, marginVertical: 15 }}>
                        {skillLevelReq.map((item, index) => {
                            return <TouchableOpacity onPress={() => onPressSkillLevel(item, index)}>
                                <View style={[styles.positionview, item.active && ({ borderColor: '#0078FF' })]}>
                                    {item.icon && <SvgXml xml={item.icon} />}
                                    <Text style={styles.positiontxt}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.subheading}>Joining Fee</Text>
                        <Text style={styles.subheadingblue}>(optional)</Text>
                    </View>

                    <TextInput style={{ marginHorizontal: 15, marginVertical: 10, paddingLeft: 10, borderRadius: 10, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F5F6F8' }} placeholder={'Add a Price'} placeholderTextColor={'#A7A9BC'} />

                    <Text style={styles.subheading}>Description</Text>

                    <TextInput textAlignVertical={'top'} multiline={true} style={{ marginHorizontal: 15, marginVertical: 10, paddingLeft: 10, borderRadius: 10, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F5F6F8' }} placeholder={' Example: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.'} placeholderTextColor={'#A7A9BC'} />

                    <TouchableOpacity style={{ borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10, marginHorizontal: 15, backgroundColor: '#0078FF' }}>
                        <Text style={{ color: '#FFF', fontSize: 20 }}>Create Session</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: { flex: 1, },
    containcont: { paddingBottom: 10, backgroundColor: '#FFF' },
    addloctxt: { padding: 10, flex: 1, color: '#A7A9BC', fontSize: 16 },
    addlocationview: { overflow: 'hidden', borderColor: '#D6D9E7', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: 15, borderRadius: 10, flexDirection: 'row', backgroundColor: '#F7F7FF' },
    iconview: { padding: 10, borderLeftWidth: 1, borderLeftColor: '#D6D9E7', width: 60, justifyContent: 'center', alignItems: 'center' },
    checkboxview: { flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 },
    topHeader: { paddingHorizontal: 20, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    listContainer: { borderTopRightRadius: 15, borderTopLeftRadius: 15, paddingTop: 10, backgroundColor: '#FFF' },
    headertxt: { fontSize: 18, color: '#000', fontFamily: 'AvenirNext-Regular' },
    subheading: { paddingLeft: 20, fontSize: 16, color: '#727484', fontFamily: 'AvenirNext-Regular' },
    subheadinggreen: { paddingLeft: 5, fontSize: 12, color: '#2FB553', fontFamily: 'AvenirNext-Regular' },
    subheadingblue: { paddingLeft: 5, fontSize: 12, color: '#0078FF', fontFamily: 'AvenirNext-Regular' },
    positionview: { marginRight: 10, marginBottom: 10, flexDirection: 'row', padding: 10, backgroundColor: '#F5F6F8', borderWidth: 1, borderColor: '#D6D9E7', borderRadius: 10 },
    positiontxt: { fontSize: 15, marginLeft: 5 },
    textinputlocation: { padding: 0, paddingLeft: 10, flex: 1, height: '100%', backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F5F6F8' },
})
export default CreateSession;