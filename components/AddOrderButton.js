import React,{useState} from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
    textStyle : {
        color : 'grey',
        fontSize : 16,
        textAlign : 'center'
    },
    container : {
        marginTop : 10,
        borderWidth : 1,
        width : 100,
        borderRadius : 10,
        backgroundColor : Colors.primary,
        marginRight : 25,
    }
});

const AddOrderButton = props => {

    return(
        <TouchableOpacity style = {{alignItems : 'flex-end',paddingBottom : 24}} onPress = {() => props.addOrder()} >
            <View style ={styles.container}>
                <Text style = {{...styles.textStyle}}>
                Add Order   
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddOrderButton;