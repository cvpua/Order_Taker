import { useLinkProps } from '@react-navigation/native';
import React, {useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
// import Colors from '../constants/colors';

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height: 90,
        paddingTop : 35,
        paddingLeft : 20,
        backgroundColor : 'grey',
        alignItems : 'flex-start',
        justifyContent : 'center'
    },
    headerTitle : {
        color : 'black',
        fontSize : 18
    },
    imageStyle : {
        width : 30,
        height : 30
    }
});


const Header = (props) => {
    
    return (
        <View style = {styles.header}>
            <TouchableOpacity onPress = {props.onTap}>
            <Image 
                source = {require('../assets/hmbgr-menu.png')} 
                style = {styles.imageStyle}    
            />
            </TouchableOpacity>
        </View>
    )

};

export default Header;