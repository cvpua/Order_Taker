import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
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
        paddingVertical : 8,
        height : "25%"
    },
    button : {
        borderWidth : 1,
        borderRadius : 10,
        width : 50
    },
    foodList : {
        flexDirection : 'row',
        // borderWidth : 1,
        justifyContent : 'space-around',
        marginVertical : 5,
    },
    foodListContainer : {
        // borderWidth : 1,
        height : "75%"
    }
});

const abbreviation  = {"Crispy Pata" : "CP", "Carbonara" : "C", "Roasted Chicken" : "RC" , "Lumpiang Shanghai" : "LS"}

const OrderList = props => {
    const {order} = props;
    
    return(
        <View style = {styles.orderContainer}>
            <ScrollView>
              <View style = {styles.foodListContainer}>
                <View style = {styles.foodList}>
                    <View>
                        <Text>
                            Qty
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Item
                        </Text>
                    </View>
                </View>
                {order.foodList.map((food,index) => {
                    return(
                    <View key = {food.foodId} style = {styles.foodList}>
                        
                        <View>            
                            <Text>
                            {food.quantity} 
                            </Text>
                        </View>
                        <View>            
                            <Text>
                            {abbreviation[food.food]}
                            </Text>
                        </View>
                    </View>
                    )
                })}
            <View>
                <View>
                <Text>
                    Date of Pickup:
                </Text>
                </View>
                <View>
                    <Text>
                    {order.dateOfPickup.date}
                    
                    </Text>
                    <Text>
                    {order.dateOfPickup.time}
                    </Text>
                </View>
                
            </View>
            </View>
            </ScrollView>
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