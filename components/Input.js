import React,{useState} from 'react';
import {View,StyleSheet,TextInput,Text,Keyboard} from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
    input : {
        height : 30,
        width : 150,
        borderBottomColor : Colors.secondary,
        borderWidth  : 1,
        marginVertical : 10,
        paddingHorizontal : 10
    },
    container : {
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'space-between',
    }
});

const Input = props => {
    const {type,onChangeHandler,value} = props;
    return(
        <View style = {{...styles.container,...props.inputContainerStyle}}>
        <Text>{props.name}: </Text>
        <TextInput 
                style = {{...styles.input}} 
                keyboardType = {type}
                value = {value}
                onChangeText = {onChangeHandler}
                />
        </View>
    )
};


export default Input;