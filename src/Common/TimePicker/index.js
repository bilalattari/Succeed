import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { downarrow } from "../../Assets/Icons";
import { SvgXml } from "react-native-svg";

import { TouchableOpacity } from 'react-native-gesture-handler';

export default TimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = () => {
        setShow(true);
    };


    return (
        <View>
            <View style={{ marginHorizontal: 20, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => { showMode() }} style={{ paddingVertical: 5, borderBottomColor: '#0078FF', borderBottomWidth: 1, width: 120, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#363232' }}>{new Date(date).toLocaleTimeString()}</Text>
                    <SvgXml xml={downarrow} />
                </TouchableOpacity>

                <Text style={{ fontSize: 13, marginBottom: -25, color: '#ADAEB9' }}>to</Text>

                <TouchableOpacity onPress={() => { showMode() }} style={{ paddingVertical: 5, borderBottomColor: '#0078FF', borderBottomWidth: 1, width: 120, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#363232' }}>10:00 AM</Text>
                    <SvgXml xml={downarrow} />
                </TouchableOpacity>
            </View>


            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'time'}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                />
            )}
            {/* <Text>{new Date(date).toString()}</Text> */}
        </View>
    );
};