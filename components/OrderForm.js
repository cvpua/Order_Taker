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
import { set } from 'react-native-reanimated';

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

const priceList = {
    "Crispy Pata" : '500',
    "Lumpiang Shanghai" : '100',
    "Roasted Chicken" : '300',
    "Carbonara" : '650'
}

const OrderForm = props => {
    const {addOrder,updateOrderList} = props;

    const {showForm,setShowForm} = props;
    const [foodCount,setFoodCount] = useState(1);
    
    
    const [name,setName] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [dateOfPickup,setDateOfPickup] = useState([]);
    const [foodList,setFoodList] = useState([]);

    

    const addOrderItem = () => {
        if (foodCount < 6){
        setFoodCount(foodCount + 1);    
        setFoodList(
            [...foodList,{quantity:0,food:"", foodPrice : "",foodId : Math.random().toString()}]
        )}
        else{
            console.log("Order Full!");
        }
    };
    
    const deleteOrderItem = (key) => {
        const updatedList = foodList.filter((item) => {
            return (item.foodId !== key);
        });
        setFoodCount(foodCount - 1);
        setFoodList(updatedList);
    };

    const nameHandler = (nameValue) => {
        
        setName(nameValue);
    };

    const contactNumberHandler = (numberValue) => {
        setContactNumber(numberValue);
    };

    const dateOfPickupHandler = (dateValue) => {
        setDateOfPickup(dateValue);
    };

    const foodListHandler = (orderListValue,foodId) => {
        orderListValue.foodPrice = priceList[orderListValue.food];
        const item = orderListValue;
        
        const updatedFoodList = foodList.map((order) =>{
            if(order.foodId === foodId){
                return item;
            }else{
                return order;
            }
        });
        setFoodList(updatedFoodList);
    };

    const submitOrder = () => {
        
        let totalCost = 0;
        for ( let i = 0; i < foodList.length; i ++){
            totalCost = totalCost + parseInt(foodList[i].foodPrice) * parseInt(foodList[i].quantity);
        }
        
        const newOrder ={name, contactNumber, dateOfPickup, foodList,totalCost,orderId : Math.random().toString()};    
        updateOrderList(newOrder);
        setShowForm(false);
          
    };
    

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
                            <Input 
                                    name = "Name" 
                                    inputContainerStyle = {styles.inputContainer} 
                                    type = "default" 
                                    value = {name}
                                    onChangeHandler = {nameHandler}
                                    />
                            <Input 
                                    name = "Contact Number" 
                                    inputContainerStyle = {styles.inputContainer} 
                                    type = "numeric" 
                                    value = {contactNumber}
                                    onChangeHandler = {contactNumberHandler}
                                    />
                            
                            <DateInput 
                                    value = {dateOfPickup}
                                    onChangeHandler = {dateOfPickupHandler}
                                    />
                            <View style = {styles.inputContainer}>
                            <Text>
                                Order: 
                             </Text>
                             </View>
                            {foodList.map((food,index)=> {
                                return (
                                    <OrderItem  
                                        key = {food.foodId} 
                                        food = {food} 
                                        inputContainerStyle = {styles.inputContainer} 
                                        deleteOrder = {deleteOrderItem}
                                        value = {foodList}
                                        onChangeHandler = {foodListHandler}
                                />) 
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
                        <TouchableOpacity onPress = {() => submitOrder()}>
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