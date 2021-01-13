import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
  });

const About = (props) => {
    return(
        <View>
            <Text>
                About
            </Text>
        </View>
    )
};


export default About;