import React from 'react';
import {StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

import Home from './screens/Home';
import Order from './screens/Order';
import About from "./screens/About";
import Logo from './components/Logo';

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
});

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function StackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'My home',
//         headerTitleStyle :{
//           textAlign : 'center',
//           alignSelf : 'center'
//         } }}
//       />
//       {/* <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={({ route }) => ({ title: route.params.name })}
//       /> */}
//     </Stack.Navigator>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}  />
        
//         <Stack.Screen name="Details" component={DetailsScreen} />
        
//       </Stack.Navigator> */}
//     <StackScreen/>
//     </NavigationContainer>
//   );
// }

const Drawer = createDrawerNavigator();

function CustomDrawerComponent(props){
  return(
    <DrawerContentScrollView {...props}>
      <Logo/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}


const App = () => {
  return(
    
    <NavigationContainer >
      <Drawer.Navigator initialRouteName = "Home" drawerContent = {CustomDrawerComponent} >
        <Drawer.Screen name="Home" component = {Home} />
        <Drawer.Screen name="Orders" component = {Order}/>
        <Drawer.Screen name="About" component = {About}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
  
};

export default App;


