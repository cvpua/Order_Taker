import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Text} from 'react-native';


const styles = StyleSheet.create({
    container : {

    },
    orderContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    orderComponents : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 10,
        paddingLeft : 20
    },
    textInputStyle : {
        borderWidth : 1
    },
    itemStyle : {
        height : 30,
        width : 130, 
    },
    qtyStyle : {
        height : 30,
        width : 30, 
        textAlign : 'center',
    }
});

const OrderItem = props =>{
    return (
        <View style = {{...props.inputContainerStyle}}>
            <Text>
                Order: 
            </Text>
            <View style = {{...styles.orderContainer}}>
                <View style = {styles.orderComponents}>
                    <Text>Qty: </Text>
                    <TextInput 
                        style = {{...styles.textInputStyle,...styles.qtyStyle}}
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={1}
                        />
                </View>
                <View style = {styles.orderComponents}>
                    <Text>Food: </Text>
                    <TextInput 
                        style = {{...styles.textInputStyle,...styles.itemStyle}}

                        />
                </View>
            </View>
        </View>
    )
}

export default OrderItem;