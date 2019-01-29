import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const AppNavigator = createStackNavigator({
  LoginScreen: { 
    screen: LoginScreen 
  },
  ForgotPasswordScreen: {
      screen: ForgotPasswordScreen
  },
  
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;