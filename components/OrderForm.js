import React from 'react';
import {
        View,
        StyleSheet,
        Modal,
        Text,
        TouchableOpacity,
        ScrollView,
        TextInput
    }
from 'react-native';
import Colors from '../constants/colors';
import Input from './Input';
import OrderItem from './OrderItem';
import AddOrderButton from './AddOrderButton';

const styles = StyleSheet.create({
    modalContainer : {
        flex : 1,
        // borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    formStyle : {
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
        paddingBottom : 40
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
    const {showForm,setShowForm} = props;

    return(
        <Modal visible = {showForm} transparent = {true} >
            <View style = {styles.modalContainer}>
                <View style = {styles.formStyle}>
                    <View>
                    <Text style ={styles.headerStyle}>
                        Order Form
                    </Text>
                    </View>
                    <ScrollView>
                        <View>
                            <Input name = "Name" inputContainerStyle = {styles.inputContainer}/>
                            <Input name = "Contact Number" inputContainerStyle = {styles.inputContainer} />
                            <Input name = "Date of Pickup" inputContainerStyle = {styles.inputContainer} />
                            <OrderItem  inputContainerStyle = {styles.inputContainer}/>
                            <AddOrderButton/>
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
        </Modal>

    )
};


export default OrderForm;