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
        // marginLeft : 8,
        borderRadius : 10,
        backgroundColor : Colors.secondary,
        
    },
    text: {
        textAlign : 'center'
    },
    valueContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        marginBottom : 8,
    },
    valueStyle : {
        width : 75,
        marginHorizontal : 8,
        borderBottomWidth : 1,
        color : Colors.tertiary
    },
    mainContainer : {
        marginHorizontal : 25,
      }
    
});

const DateInput = props => {
    
    
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [dateOfDelivery,setDateOfDelivery] = useState();
  const [timeOfDelivery,setTimeOfDelivery] = useState();
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if(mode === 'date'){
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; 
      const day = currentDate.getDate();

      const date = `${month}-${day}-${year}`
      setDateOfDelivery(date);
    }else{
      let timeConvention;
      let hour = currentDate.getHours().toString();
      let minute = currentDate.getMinutes().toString();
      
      if (parseInt(hour) >= 12){
        hour = parseInt(hour) - 12
        hour = hour.toString()
        timeConvention = 'PM';
      }else{
        timeConvention = 'AM';
      }

      if (parseInt(hour) < 10){
        hour = '0'+hour;
      }
      if (parseInt(minute) < 10){
        minute = '0'+minute;
      }
      const time = `${hour}:${minute} ${timeConvention}`
      setTimeOfDelivery(time);
    }
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


  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.valueContainer}>
            <View>
            <Text>Date of Pickup: </Text>
            </View>    
            <TextInput 
                editable = {false}
                style = {styles.valueStyle}
                textAlign = 'center'
                value = {dateOfDelivery}
                />
            <TextInput 
                editable = {false}
                style = {styles.valueStyle}
                textAlign = 'center'
                value = {timeOfDelivery}
                />
        </View>
        <View style = {styles.buttonContainer}>
        <View style = {{...styles.button}}>
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
            // is24Hour={true}  
            display="default"
            onChange={onChange}
            
            />
        )}
        </View>
    </View>
  );
}

export default DateInput;