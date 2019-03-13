import React from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import CurrencyScreen from '../screens/CurrencyScreen';
import AdminScreen from '../screens/AdminScreen';
import MenuButton from '../components/MenuButton';
import AUDCADScreen from '../screens/SignalScreens/AUDCADScreen';
import AUDCHFScreen from '../screens/SignalScreens/AUDCHFScreen';
import AUDJPYScreen from '../screens/SignalScreens/AUDJPYScreen';
import AUDNZDScreen from '../screens/SignalScreens/AUDNZDScreen';
import AUDUSDScreen from '../screens/SignalScreens/AUDUSDScreen';
import CADCHFScreen from '../screens/SignalScreens/CADCHFScreen';
import CADJPYScreen from '../screens/SignalScreens/CADJPYScreen';
import CHFJPYScreen from '../screens/SignalScreens/CHFJPYScreen';
import EURAUDScreen from '../screens/SignalScreens/EURAUDScreen';
import EURCADScreen from '../screens/SignalScreens/EURCADScreen';
import EURCHFScreen from '../screens/SignalScreens/EURCHFScreen';
import EURGBPScreen from '../screens/SignalScreens/EURGBPScreen';
import EURJPYScreen from '../screens/SignalScreens/EURJPYScreen';
import EURNZDScreen from '../screens/SignalScreens/EURNZDScreen';
import EURUSDScreen from '../screens/SignalScreens/EURUSDScreen';
import GBPAUDScreen from '../screens/SignalScreens/GBPAUDScreen';
import GBPCADScreen from '../screens/SignalScreens/GBPCADScreen';
import GBPCHFScreen from '../screens/SignalScreens/GBPCHFScreen';
import GBPJPYScreen from '../screens/SignalScreens/GBPJPYScreen';
import GBPNZDScreen from '../screens/SignalScreens/GBPNZDScreen';
import GBPUSDScreen from '../screens/SignalScreens/GBPUSDScreen';
import NZDCADScreen from '../screens/SignalScreens/NZDCADScreen';
import NZDCHFScreen from '../screens/SignalScreens/NZDCHFScreen';
import NZDJPYScreen from '../screens/SignalScreens/NZDJPYScreen';
import NZDUSDScreen from '../screens/SignalScreens/NZDUSDScreen';
import USDCADScreen from '../screens/SignalScreens/USDCADScreen';
import USDCHFScreen from '../screens/SignalScreens/USDCHFScreen';
import USDJPYScreen from '../screens/SignalScreens/USDJPYScreen';




const AppStackNavigator = createStackNavigator({
    Currency:{screen:CurrencyScreen},
    AUDCAD:{screen:AUDCADScreen},
    AUDCHF:{screen:AUDCHFScreen},
    AUDJPY:{screen:AUDJPYScreen},
    AUDNZD:{screen:AUDNZDScreen},
    AUDUSD:{screen:AUDUSDScreen},
    CADCHF:{screen:CADCHFScreen},
    CADJPY:{screen:CADJPYScreen},
    CHFJPY:{screen:CHFJPYScreen},
    EURAUD:{screen:EURAUDScreen},
    EURCAD:{screen:EURCADScreen},
    EURCHF:{screen:EURCHFScreen},
    EURGBP:{screen:EURGBPScreen},
    EURJPY:{screen:EURJPYScreen},
    EURNZD:{screen:EURNZDScreen},
    EURUSD:{screen:EURUSDScreen},
    GBPAUD:{screen:GBPAUDScreen},
    GBPCAD:{screen:GBPCADScreen},
    GBPCHF:{screen:GBPCHFScreen},
    GBPJPY:{screen:GBPJPYScreen},
    GBPNZD:{screen:GBPNZDScreen},
    GBPUSD:{screen:GBPUSDScreen},
    NZDCAD:{screen:NZDCADScreen},
    NZDCHF:{screen:NZDCHFScreen},
    NZDJPY:{screen:NZDJPYScreen},
    NZDUSD:{screen:NZDUSDScreen},
    USDCAD:{screen:USDCADScreen},
    USDCHF:{screen:USDCHFScreen},
    USDJPY:{screen:USDJPYScreen},
 
  });
  
  const AppDrawerNavigator = createDrawerNavigator({
    Currencies: {
      screen: AppStackNavigator
    },
    AdminScreen: {
      screen:AdminScreen
    }
  });
  
  const AppSwitchNavigator = createSwitchNavigator({
    Login:{screen:LoginScreen},
    Currency:{screen:AppDrawerNavigator},
    SignUp:{screen:SignUpScreen}
  });
  
  const AppContainer = createAppContainer(AppSwitchNavigator);
  
  export default AppContainer;


// const width = Dimensions.get('window').width;

// const DrawerConfig = {
//   drawerWidth: width*0.83,
// }

// // const AppNavigator = createSwitchNavigator({
// //   Auth: AuthenticationNavigator,
// //   Drawer: DrawerNavigator
// // });

// const AppNavigator = createStackNavigator({
//   LoginScreen: { 
//     screen: LoginScreen 
//   },
//   ForgotPasswordScreen: {
//       screen: ForgotPasswordScreen
//   },
//   SignUpScreen: {
//     screen: SignUpScreen
//   },
//   SignalScreen : {
//     screen: SignalScreen
//   },
// });


// // const DrawerNavigator = createDrawerNavigator(
// //     {

// //     Notifications: {
// //         screen: ForgotPasswordScreen
// //     },
// //     Logout:{
// //         screen: LoginScreen
// //     },

// // },
// //     DrawerConfig
// // );


// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;



// //We can create both the stack and the drawer navigators, then create the stack navigator with authentication

// // /////////////////THIS IS THE KEY


// // const AppNavigator = createSwitchNavigator({
// //   /* 
// //    * Rather than being rendered by a screen component, the
// //    * AuthenticationNavigator is a screen component
// //    */
// //   Auth: AuthenticationNavigator,
// //   Home: HomeScreen,
// // });

// // const AppContainer = createAppContainer(AppNavigator);