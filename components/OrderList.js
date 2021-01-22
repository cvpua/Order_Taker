import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../constants/colors';


const styles = StyleSheet.create({
    orderContainer : {
        margin : 10,
        marginHorizontal : 20,
        borderWidth : 2,
        width : 150,
        height : 175,
        borderRadius : 10,
        
    },
    buttonContainer : {
        flexDirection : 'row',
        position : 'absolute',
        bottom : 0,
        borderTopWidth : 1,
        flex : 1,
        width : '100%',
        justifyContent : 'space-around',
        paddingVertical : 8
    },
    button : {
        borderWidth : 1,
        borderRadius : 10,
        width : 50
    }
});

const OrderList = props => {
    const {order} = props;
    
    return(
        <View style = {styles.orderContainer}>
            <Text>Hello</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text style = {{textAlign : 'center'}}>
                            View
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text style = {{textAlign : 'center'}} >
                            Print
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default OrderList;