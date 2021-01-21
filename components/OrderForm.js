import React,{useState} from 'react';
import {
        View,
        StyleSheet,
        Text,
        TouchableOpacity,
        ScrollView,
        LogBox,
        Alert,
    }
from 'react-native';


import Colors from '../constants/colors';
import Input from './Input';
import OrderItem from './OrderItem';
import AddOrderButton from './AddOrderButton';
import DateInput from './DateInput';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const styles = StyleSheet.create({
    modalContainer : {
        flex : 1,
        // borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    formStyle : {
        // flex : 1,
        height :  500,
        width : 350,
        maxWidth : '80%',
        maxHeight :'80%',
        // borderWidth : 1,
        elevation : 20,
        backgroundColor : Colors.primary,
        paddingTop : 20,
        borderRadius : 10
    },
    buttonContainer : {
        flexDirection : 'row',
        // borderWidth : 1,
        justifyContent : 'space-around',
        paddingBottom : 40,
        marginTop : 32
    },
    button : {
        borderWidth : 1,
        borderRadius : 10,
        backgroundColor : Colors.secondary,
        width : 100,
        alignItems : 'center'
    },
    headerStyle : {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 18
    },
    inputContainer : {
        paddingHorizontal : 25,
        // borderWidth : 1,
    }
});

const OrderForm = props => {
    const {addOrder} = props;

    const {showForm,setShowForm} = props;
    const [orderCount,setOrderCount] = useState(1);
    
    
    const [name,setName] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [dateOfPickup,setDateOfPickup] = useState([]);
    const [orderList,setOrderList] = useState([]);
    const [order,setOrder] = useState({name, contactNumber, dateOfPickup, orderList}); 
    
    

    const addOrderItem = () => {
        if (orderCount < 6){
        setOrderCount(orderCount + 1);    
        setOrderList(
            [...orderList,{Name:"World",ContactNumber:"09",orderId : Math.random().toString()}]
        )}
        else{
            console.log("Order Full!")
        }
    }
    
    const deleteOrderItem = (key) => {
        const updatedList = orderList.filter((item) => {
            return (item.orderId !== key);
        });
        setOrderCount(orderCount - 1);
        setOrderList(updatedList)
    }

    const changeNameHandler = () => {

    }

    const contactNumberHandler = () => {

    }

    const dateOfPickupHandler = () => {

    }

    const orderListHandler = () => {

    }


    return(
        // <Modal visible = {showForm} transparent = {true} >
        //    <View>
           <View style = {styles.modalContainer}>
                <View style = {styles.formStyle}>
                    <View>
                    <Text style ={styles.headerStyle}>
                        Order Form
                    </Text>
                    </View>
                    <ScrollView>
                        <View>
                            <Input name = "Name" inputContainerStyle = {styles.inputContainer} type = "default"/>
                            <Input name = "Contact Number" inputContainerStyle = {styles.inputContainer} type = "numeric" />
                            {/* <Input name = "Date of Pickup" inputContainerStyle = {styles.inputContainer} /> */}
                            <DateInput />
                            <View style = {styles.inputContainer}>
                            <Text>
                                Order: 
                             </Text>
                             </View>
                            {orderList.map((order,index)=> {
                                return (<OrderItem  
                                key = {order.orderId} 
                                orderId = {order.orderId} 
                                inputContainerStyle = {styles.inputContainer} 
                                deleteOrder = {deleteOrderItem}/>) 
                            })}
                            <AddOrderButton addOrder = {addOrderItem}/>
                        </View>
                    </ScrollView>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress = {() => {setShowForm(false)}}>
                            <View style = {styles.button}>
                                <Text>
                                    Cancel
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => {setShowForm(false)}}>
                            <View style = {styles.button}>
                                <Text>
                                    Confirm
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            // </View> 
        // </Modal>

    )
};


export default OrderForm;