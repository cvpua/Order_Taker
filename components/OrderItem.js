import React,{useState,useEffect} from 'react';
import {
        View,
        TextInput,
        StyleSheet,
        Text,
        Animated,
        I18nManager,
    } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors';
import {Picker} from '@react-native-picker/picker';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const styles = StyleSheet.create({
    container : {

    },
    orderContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        // borderWidth : 1,
        
    },
    orderComponents : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 10,
        paddingLeft : 20,
        // borderWidth : 1
    },
    textInputStyle : {
        borderBottomWidth : 1,
    },
    itemStyle : {
        height : 30,
        width : 130, 
    },
    qtyStyle : {
        height : 30,
        width : 30, 
        textAlign : 'center',
    },
    leftAction: {
        flex: 1,
        backgroundColor: Colors.secondary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
      },
    actionIcon: {
        width: 30,
        marginHorizontal: 16,
      },
    onePicker: {
        width: 200,
        height: 40,
        // backgroundColor: Colors.primary,
        borderColor: 'black',
        borderWidth: 1,
      },
      onePickerItem: {
        height: 44,
        color: 'red',
        
      },
});

const data = [{name :'Crispy Pata'},{name:'Carbonara'},{name :'Lumpiang Shanghai'},{name:'Roasted Chicken'}];


const OrderItem = props =>{
    const {deleteOrder,food,onChangeHandler} = props;
    
    // const [choices,setChoices] = useState(data);
    const [chosenFood,setChosenFood] = useState(data[0]);
    const [quantity,setQuantity] = useState('0');
    
    

    const chosenFoodHandler = (food) => {
        setChosenFood({name:food.name});
    }

    const quantityHandler = (numberValue) =>{
        setQuantity(numberValue);
    }

    useEffect( () =>{
        onChangeHandler({quantity,food:chosenFood.name,foodId :food.foodId},food.foodId);
    },[chosenFood,quantity]);

    const RenderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        return (
          <RectButton style={styles.leftAction}>
            <AnimatedIcon
              name="delete"
              size={30}
              color="#fff"
              style={styles.actionIcon}
              onPress ={() => deleteOrder(food.foodId)}
            />
          </RectButton>
        );
      };


    return (
        <Swipeable renderLeftActions = {RenderLeftActions}>
        <View style = {{...props.inputContainerStyle}}>   
            <View style = {{...styles.orderContainer}}>
                <View style = {styles.orderComponents}>
                    <Text>Qty: </Text>
                    <TextInput 
                        style = {{...styles.textInputStyle,...styles.qtyStyle}} 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={1}
                        value = {quantity}
                        onChangeText = {quantityHandler}
                        />
                </View>
                <View style = {styles.orderComponents}>
                    <Picker 
                        selectedValue = {chosenFood.name}
                        style = {styles.onePicker}
                        itemStyle = {styles.onePickerItem}
                        mode = 'dropdown'
                        onValueChange = {(item,index) => {
                            chosenFoodHandler({name: item});
                        }}
                    >
                        {data.map((food,index) => {
                            return (<Picker.Item key = {index} label = {food.name} value = {food.name}  />)
                        })}
                        
                    </Picker>
                </View>
            </View>
        </View>
        </Swipeable>
    )
}

export default OrderItem;