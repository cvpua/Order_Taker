import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const styles = StyleSheet.create({
    imageStyle : {
        height : 110,
        width : 110
    },
    screen : {
        backgroundColor : 'white',
        // flex: 1,
        marginTop : 30,
        alignItems : 'center',
        // justifyContent : 'center'
    }
});

const Logo = (props) => {
    // console.log(props);
    return(
        <View style = {styles.screen}>
            <Image
                source = {require('../assets/kitchen-logo.png')}
                style = {styles.imageStyle}
            />
            
        </View>
    )

};

export default Logo;