import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, KeyboardAvoidingView,  Dimensions, TextInput } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import AppContainer from './navigation/AppNavigator';
import SignalScreen from './screens/SignalScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import {f, auth, database} from './config/config';
import { Form, Item, Input, Button, View } from 'native-base';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      loggedIn: false
    };
    // this.registerUser('test@gmail.com', 'fakepassword');
    var that = this;
    f.auth().onAuthStateChanged(function(user) {
      if(user){
        //Logged In
        that.setState({
          loggedIn: true
        })
        console.log('Logged in', user);
      }else{
        //Logged Out
        that.setState({
          loggedIn:false
        })
        console.log('Logged out');
      }
    }); 

  }

  loginUser = async(email, password) => {
    if(email != '' && password != ''){
      try{
        let user = await auth.signInWithEmailAndPassword(email, password);
        console.log(user);
      } catch(error){
        console.log(error);
      }
    }else {
      alert('Missing email or password');
    }
  }

  async loginWithFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '403052200452385',
      {permissions: ['email', 'public_profile']}
    );

    if(type === 'success'){
      const credentials = f.auth.FacebookAuthProvider.credential(token);
      f.auth().signInWithCredential(credentials).catch((error) =>{
        console.log('Error...', error);
      })
    }
  }



  registerUser = (email, password) => {
    console.log(email,password);
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(email, password, user))
    .catch((error) => console.log('error logging in', error))
  }

  signUserOut = () => {
    auth.signOut()
    .then(() =>{
      console.log('Logged out...');
    }).catch((error) => {
      console.log('Error:', error);
    });
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       
        <Image 
        source={require('./assets/chipp_startup_solution.jpg')} 
        style={styles.imageStyle}
        />

          <Form>
            <Item style={styles.inputStyle}>
              <Input
               onChangeText={(text) => this.setState({email: text})}
               value={this.state.email}
               placeholder="email" />
            </Item>
            <Item style={styles.inputStyle}>
              <Input 
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry
              value={this.state.password}
              placeholder="password" />
            </Item>
          </Form>

          <Button 
          transparent 
          style={{flexDirection: 'row', alignSelf:'flex-end', marginRight:10}}
          onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
          >
          <Text style={{color:'blue'}}>Forgot Password?</Text>
          </Button>
          

          <Button
           style ={{width:width/1.1, alignSelf:'center', marginTop: 10}}
           onPress={() => this.loginUser(this.state.email, this.state.password)}
           block info
           
           >
            <Text style={{color: 'white'}}>Log In</Text>
          </Button>

          <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:14}}>Don't have an account?</Text>
          <Button 
          transparent
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
          > 
          <Text style={{color:'blue'}}> Sign Up.</Text>
          </Button>
          </View>
          

      </KeyboardAvoidingView>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 45,
    alignSelf:'center',
    justifyContent:'center',
    marginVertical: 5,
    borderRadius: 5,
    width: width/1.1,
    marginRight:15, 
    backgroundColor:'#f6f6f6',
    borderWidth: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageStyle: {
    width: width,
    alignSelf:'stretch',
    resizeMode: 'contain'
  },
});

