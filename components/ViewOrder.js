import React, {useState} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,Modal} from 'react-native';
import CloseButton from './CloseButton';

const styles = StyleSheet.create({
    closeButton : {
        position : 'absolute',
        // borderWidth : 1,
        width : 20,
        alignItems : 'center',
        top : 0,
        right : 0,
        marginRight : 20
    },
    container : {
        flex : 1,    
        justifyContent : 'center',
        alignItems : 'center',
    },
    orderContainer : {
        // borderWidth : 1,
        backgroundColor : 'white',
        elevation : 20,
        borderRadius : 10,
        width : 400,
        // flex : 1,
        maxHeight : '80%',
        maxWidth : '60%',
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingVertical : 30,
        paddingHorizontal : 16
    },
    nameStlye : {
        fontWeight : 'bold',
        fontSize : 20
    },
    headerStyle : {
        flexDirection : 'row',
        marginTop : 10,
        // marginLeft : '8%',
        // marginRight : '4%',
        // borderWidth : 1    
    },
    item:{
        flexDirection : 'row',
        marginVertical : 5,
        // borderWidth : 1,
        paddingLeft : '4%'
    },
    itemContainer:{
        // borderWidth : 1,
        width : "100%",
        paddingVertical : 10,
        // marginLeft : '4%',
        // marginRight : '4%'
    },
    dateContainer : {
        flexDirection : 'row',
        width : "100%",
        marginVertical : 10,
        justifyContent : 'space-between',
    },
    totalCost :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10
        // marginLeft : '16%',
        // marginRight : "8%",
        // borderWidth : 1
    }

});

const ViewOrder = props => {
    const {name,contactNumber,dateOfPickup, foodList,totalCost, orderId} = props.order;
    const showModal = props.showModal;
    
    // const totalCost = useState([]);
    
    return(
    <Modal visible = {showModal} transparent = {true}>
            <View style = {styles.container}>
                <View style = {styles.orderContainer}>
                    <View style = {styles.closeButton}>
                    <CloseButton viewModal = {props.viewModal}/>
                    </View>
                    <View >
                        <Text numberOfLines = {2} style = {styles.nameStlye}>{name}'s Order</Text>
                    </View> 
                    <View style = {styles.headerStyle}>
                        <View style = {{flex :1}}>
                            <Text>
                                Qty
                            </Text>
                        
                        </View>
                        <View style = {{flex : 1}}>
                            <Text>
                                Item
                            </Text>
                        </View>
                        <View style = {{flex : 1}}>
                            <Text>
                                Price
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.itemContainer}>
                    {foodList.map((food) => {
                                
                                return(
                                    <View key = {food.foodId} style = {styles.item}> 
                                        <View style ={{flex : 0.90,}}>
                                            <Text>
                                                {food.quantity}
                                            </Text> 
                                        </View> 
                                        <View style ={{flex : 1.90,}}>
                                            <Text>
                                                {food.food}
                                            </Text>
                                        </View>
                                        <View style ={{flex : 1.5,}}>
                                            <Text>
                                                {parseInt(food.foodPrice) * parseInt(food.quantity)}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })}
                        <View>
                            <Text style = {{textAlign : 'center'}}>
                                ------------------------------------------------
                            </Text>
                            <View style = {styles.totalCost}>
                                <View style = {{flex : 2}}>
                                    <Text>
                                        Total Cost :
                                    </Text>
                                </View>
                                <View style = {{flex : 1}}>
                                    <Text>
                                        {totalCost}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.dateContainer}>
                        <View style = {{flex : 2}}>
                            <Text>
                                Date of Pickup:
                            </Text>
                        </View>
                        <View style = {{flex : 1}}>
                            <Text>
                                {dateOfPickup.date}
                            </Text>
                            <Text>
                                {dateOfPickup.time}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text>
                                Print
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default ViewOrder;