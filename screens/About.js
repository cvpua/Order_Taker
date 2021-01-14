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

const About = (props) => {
    return(
        <View style = {{flex:1}}>
        <Header title = "About" onTap = {props.navigation.openDrawer}/>
        <View style = {styles.container}> 
            <Text>
                About
            </Text>
            </View>
        </View>
    )
};


export default About;