import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity, 
    Image,
    Modal,
    Button
} from 'react-native';
import CloseButton from './CloseButton';

const styles = StyleSheet.create({
    container : {
        margin : 10,
        marginTop : 20,
        width : 150,
        height : 150,
        // borderWidth : 1,
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    imageStyle : {
        width : 120,
        height : 120,
        borderRadius : 10,
    },
    textStyle : {
        marginTop : 10
    },
    modalImage : {
        // marginTop : 30,
        width : 150,
        height : 150,
        borderRadius : 10,
    },
    modalContainer : {
        flex : 1,    
        justifyContent : 'center',
        alignItems : 'center',
    },
    modalStyle : {
        // borderWidth : 1,
        backgroundColor : 'white',
        elevation : 20,
        borderRadius : 10,
        width : 300,
        height : 300,
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingVertical : 30
    },
    closeButton : {
        position : 'absolute',
        // borderWidth : 1,
        width : 20,
        alignItems : 'center',
        top : 0,
        right : 0,
        marginRight : 20
    },
    textContainer : {
        marginTop : 10,
        marginHorizontal : 20,
        // borderWidth : 1,
        flex : 1
    }
    
});

const FoodContainer = props => {
    
    const [isViewMode,setViewMode] = useState(false);

    const viewModal = value => {
        setViewMode(value);
    }


    const {foodImage,foodName,foodPrice,foodDescription,foodQuantity} = props;
    return (
        <View>
        <TouchableOpacity onPress = {() => viewModal(true)}>
            <View style = {styles.container}>
                <Image 
                    source = {foodImage}
                    style = {styles.imageStyle}
                    />
                <View style = {styles.textStyle}>
                <Text>{foodName}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <Modal 
            animationType = 'fade'
            visible = {isViewMode}
            transparent = {true}
            >
            <View style = {styles.modalContainer}>
                <View style = {styles.modalStyle}>
                    <View style = {styles.closeButton}>
                    <CloseButton viewModal = {viewModal}/>
                    </View>
                <Image 
                    source = {foodImage}
                    style = {styles.modalImage}
                    />
                    <View style = {styles.textContainer}>
                    <Text style = {{fontWeight : 'bold', textAlign : 'center'}}>{foodName}</Text>
                    <Text style = {{textAlign : 'center'}}>Php {foodPrice}</Text>
                    <Text style = {{textAlign : 'center'}}>{foodDescription}</Text>
                    </View>
                </View>
            </View>
        </Modal>
        </View>
    )

};


export default FoodContainer;