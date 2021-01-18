import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Header from '../components/Header';
import OrderForm from '../components/OrderForm';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    //   borderWidth : 1
    },
    orderButton : {
        position : 'absolute',
        bottom : 0,
        right : 0,
        width : 60,
        height : 60,
        borderRadius : 60/2,
        marginBottom : 40,
        marginRight : 40,
        // borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'grey'
    },

  });

const Order = (props) => {

    const [toOrder,setToOrder] = useState(false);

    const setToOrderHandler = (value) => {
        setToOrder(value);
    }

    return(
        <View style = {{flex:1}}>
        <Header title = "Orders" onTap = {props.navigation.openDrawer}/>
        <View style = {styles.container}> 
            <TouchableOpacity style = {styles.orderButton} onPress = {() => {setToOrderHandler(true)}} >
                <View>
                <Text style = {{fontSize : 40}}>+</Text>
                </View>
            </TouchableOpacity>
            </View>
        <OrderForm showForm = {toOrder} setShowForm = {setToOrderHandler}/>    
        </View>
    )
};


export default Order;