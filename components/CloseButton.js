import React,{useState} from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle : {
        color : 'grey',
        fontSize : 30
    },
    container : {
        flex : 1
    }
});

const CloseButton = props => {

    return(
        <TouchableOpacity onPress = {() => props.viewModal(false)}>
            <View>
                <Text style = {{...styles.textStyle}}>
                ×
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CloseButton;