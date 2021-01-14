import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';


const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
  });

const Home = (props) => {
    return(
        <View style = {{flex:1}}>
        <Header title = "Home" onTap = {props.navigation.openDrawer}/>
        <View style = {styles.container}> 
            <Text>
                Home
            </Text>
            </View>
        </View>
    )
};


export default Home;