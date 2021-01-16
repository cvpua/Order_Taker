import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Button    
}
from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import Pata from '../assets/food/pata.jpeg';
import Chicken from '../assets/food/chicken.jpg';
import Shanghai from '../assets/food/lumpia.jpg';
import Carbonara from '../assets/food/carbonara.jpg';
import FoodContainer from '../components/FoodContainer';

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        flexDirection :'row',
        flexWrap : 'wrap',
        // marginLeft : 10
    },
    titlteContainer : {
        alignItems : 'center',
        margin : 20
    },
    titleStyle : {
        fontSize : 32,
        
    }
  });

const Home = (props) => {
    return(
        <View style = {{flex:1}}>
        <Header title = "Home" onTap = {props.navigation.openDrawer}/>
            <View  style = {styles.titlteContainer}>
            <Text style = {styles.titleStyle}>MENU</Text>
            </View>
        <ScrollView>
            <View style = {styles.container}> 
            <FoodContainer 
                foodImage = {Pata} 
                foodName = "Crispy Pata"
                foodPrice = "500"
                foodDescription = "Lasang Pata Lasang Pata Lasang Pata"
                foodQuantity = "1" />
            <FoodContainer 
                foodImage = {Chicken} 
                foodName = "Roasted Chicken" 
                foodPrice = "300"
                foodDescription = "Lasang Manok Lasang Manok Lasang Manok Lasang Manok"
                foodQuantity = "1"
                />
            <FoodContainer 
                foodImage = {Shanghai} 
                foodName = "Lumpiang Shanghai" 
                foodPrice = "100"
                foodDescription = "Lasang Shanghai"
                foodQuantity = "12"
                />
            <FoodContainer 
                foodImage = {Carbonara} 
                foodName = "Carbonara" 
                foodPrice = "750"
                foodDescription = "Lasang Carbonara"
                foodQuantity = "1"
                />
            <FoodContainer 
                foodImage = {Pata} 
                foodName = "Crispy Pata"
                foodPrice = "500"
                foodDescription = "Lasang Pata"
                foodQuantity = "1" />
            <FoodContainer 
                foodImage = {Pata} 
                foodName = "Crispy Pata"
                foodPrice = "500"
                foodDescription = "Lasang Pata"
                foodQuantity = "1" />
            </View>
        </ScrollView>
        </View>
    )
};

export default Home;