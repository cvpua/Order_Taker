import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
  });

const Order = (props) => {
    return(
        <View>
            <Text>
                Order
            </Text>
        </View>
    )
};


export default Order;