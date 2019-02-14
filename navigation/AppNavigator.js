import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignalScreen from '../screens/SignalScreen';
import CurrencyScreen from '../screens/CurrencyScreen';

const width = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: width*0.83,
}

// const AppNavigator = createSwitchNavigator({
//   Auth: AuthenticationNavigator,
//   Drawer: DrawerNavigator
// });

const AppNavigator = createStackNavigator({
  LoginScreen: { 
    screen: LoginScreen 
  },
  ForgotPasswordScreen: {
      screen: ForgotPasswordScreen
  },
  SignUpScreen: {
    screen: SignUpScreen
  },
  SignalScreen : {
    screen: SignalScreen
  },
});


// const DrawerNavigator = createDrawerNavigator(
//     {

//     Notifications: {
//         screen: ForgotPasswordScreen
//     },
//     Logout:{
//         screen: LoginScreen
//     },

// },
//     DrawerConfig
// );


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;



//We can create both the stack and the drawer navigators, then create the stack navigator with authentication

// /////////////////THIS IS THE KEY


// const AppNavigator = createSwitchNavigator({
//   /* 
//    * Rather than being rendered by a screen component, the
//    * AuthenticationNavigator is a screen component
//    */
//   Auth: AuthenticationNavigator,
//   Home: HomeScreen,
// });

// const AppContainer = createAppContainer(AppNavigator);