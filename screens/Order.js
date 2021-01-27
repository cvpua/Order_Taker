import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Header from '../components/Header';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      paddingHorizontal : 6,
    //   borderWidth : 1,    
      flexDirection : 'row',   
      flexWrap : 'wrap',
       
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
    const [orderList,setOrderList] = useState([]);

    const setToOrderHandler = (value) => {
        setToOrder(value);
    };

    const addOrder = (order) => {
        setListOfOrder([...listOfOrder,order]);
    };

    const orderListHandler = (newOrder) => {
        setOrderList([...orderList,newOrder]);
    }
    

    let currentView = (
        
        <View style = {{flex : 1}} > 
            <ScrollView>
            <View style = {styles.container}>
            {orderList.map((order,index) => {
                return (<OrderList key = {order.orderId} order = {order} />)
            })
            }
            </View>
            </ScrollView>
            {/* <View > */}
            <TouchableOpacity style = {styles.orderButton}  onPress = {() => {setToOrderHandler(true)}} >
                <View>
                <Text style = {{fontSize : 40}}>+</Text>
                </View>
            </TouchableOpacity>
            {/* </View> */}
        </View>
        )
    if (toOrder){
        currentView =  <OrderForm 
                            showForm = {toOrder} 
                            setShowForm = {setToOrderHandler}
                            addOrder = {addOrder}
                            updateOrderList = {orderListHandler}
                            /> 
    }
    return(

        <View style = {{flex:1}}>
        <Header title = "Orders" onTap = {props.navigation.openDrawer}/>
        {currentView}
        </View>
    )
};


export default Order;