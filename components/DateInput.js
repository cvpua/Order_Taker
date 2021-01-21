import React,{useState} from 'react';
import {
        View,
        StyleSheet,
        TextInput,
        Text,
        TouchableOpacity,
        Button
    }
from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors  from '../constants/colors';


const styles = StyleSheet.create({
    buttonContainer : {
        // borderWidth : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    button : {
        width : 70,
        height : 25,
        borderWidth : 1,
        marginLeft : 8,
        borderRadius : 10,
        backgroundColor : Colors.secondary
    },
    text: {
        textAlign : 'center'
    },
    valueContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginBottom : 8,
        // borderWidth : 1
    },
    valueStyle : {
        width : 75,
        marginLeft : 16,
        borderBottomWidth : 1
    },
    mainContainer : {
        marginHorizontal : 25
    }
    
});

const DateInput = props => {
    
    
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
//   console.log(date)

  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.valueContainer}>
            <View>
            <Text>Date of Pickup: </Text>
            </View>    
            <TextInput style = {styles.valueStyle}/>
            <TextInput style = {styles.valueStyle}/>
        </View>
        <View style = {styles.buttonContainer}>
        <View style = {{...styles.button,marginRight : 14}}>
            <TouchableOpacity onPress = {showDatepicker}>
                <Text style = {styles.text}>Set Date</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.button}>
            <TouchableOpacity onPress = {showTimepicker}>
                    <Text style = {styles.text}>Set Time</Text>
                </TouchableOpacity>
        </View>
        {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}
        </View>
    </View>
  );
}

export default DateInput;