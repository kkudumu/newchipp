import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { Drawer } from 'native-base';
import SignalScreen from '../scr    eens/SignalScreen';

const width = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: width*0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
    LoginScreen: {
        screen: LoginScreen
    },
    SignUp:{
        screen: SignUpScreen
    },

},
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);