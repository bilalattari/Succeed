import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { calender } from "../../Assets/Icons";
import { SvgXml } from "react-native-svg";
import Touchable from '../Touchable';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default () => {
    const monthArr = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
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
            {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}

            <TouchableOpacity onPress={() => { showMode() }} style={{ borderColor: '#0078FF', borderWidth: 1, justifyContent: 'center', alignItems: 'center', margin: 15, borderRadius: 10, flexDirection: 'row', backgroundColor: '#F7F7FF' }}>
                <Text style={{ padding: 10, flex: 1, color: '#363232', fontSize: 17 }}>{date.getDate() + ' , ' + monthArr[date.getMonth()] + ' , ' + date.getFullYear()}</Text>
                <View style={{ padding: 10, borderLeftWidth: 1, borderLeftColor: '#0078FF', width: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={calender} />
                </View>
            </TouchableOpacity>


            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            {/* <Text>{new Date(date).toString()}</Text> */}
        </View>
    );
};