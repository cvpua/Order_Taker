import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
  });

const Order = (props) => {
    return(
        <View style = {{flex:1}}>
        <Header title = "Orders" onTap = {props.navigation.openDrawer}/>
        <View style = {styles.container}> 
            <Text>
                Order
            </Text>
            </View>
        </View>
    )
};


export default Order;