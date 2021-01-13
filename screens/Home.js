import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
  });

const Home = (props) => {
    return(
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
};


export default Home;