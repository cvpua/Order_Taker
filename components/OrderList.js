import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import Colors from '../constants/colors';
import ViewOrder from './ViewOrder';


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
        // position : 'absolute',
        bottom : 0,
        borderTopWidth : 1,
        // flex : 1,
        width : '100%',
        justifyContent : 'space-around',
        paddingVertical : 8,
        height : "25%"
    },
    button : {
        borderWidth : 1,
        borderRadius : 10,
        width : 50,
        // height: 50
    },
    foodList : {
        flexDirection : 'row',
        // borderWidth : 1,
        justifyContent : 'flex-start',
        paddingTop : 5,
        marginHorizontal : "10%"
    },
    foodListContainer : {
        // flex : 1
        // borderWidth : 1,
        // backgroundColor : 'grey',
        // height : "75%"
    },
    foodItem : {
        marginLeft : "15%",
        flex : 1,
        // borderWidth : 1
    },
    dateContainer : {
        marginTop : "10%",
        marginLeft : "20%"
    }
});

const abbreviation  = {"Crispy Pata" : "CP", "Carbonara" : "C", "Roasted Chicken" : "RC" , "Lumpiang Shanghai" : "LS"}

const OrderList = props => {
    const {order} = props;
    
    const [modal,setModal] = useState(false);

    const setModalHandler = (value) => {
        setModal(value);
    }

    return(
        <View style = {styles.orderContainer}>
            <ScrollView>
              <View style = {styles.foodListContainer}>
                <View style = {styles.foodList}>
                    <View style = {styles.foodItem}>
                        <Text>
                            Qty
                        </Text>
                    </View>
                    <View style = {styles.foodItem}>
                        <Text>
                            Item
                        </Text>
                    </View>
                </View>
                {order.foodList.map((food,index) => {
                    return(
                    <View key = {food.foodId} style = {styles.foodList}>
                        <View style = {styles.foodItem}>            
                            <Text>
                            {food.quantity} 
                            </Text>
                        </View>
                        <View style = {styles.foodItem} >            
                            <Text numberOfLines = {1}>
                            {/* {abbreviation[food.food]} */}
                            {food.food}
                            </Text>
                        </View>
                    </View>
                    )
                })}
            <View style = {styles.dateContainer}>
                <View style = {{marginBottom : 5}}>
                    <Text>
                        DoP:
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
                <TouchableOpacity onPress = {() => {setModalHandler(true)}}>
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
            <ViewOrder order = {order} showModal = {modal} viewModal = {setModalHandler}/>
        </View>
    )
}


export default OrderList;