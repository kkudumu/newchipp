import React from 'react';
import { StyleSheet, Text, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Form, Item, Input, Button, View } from 'native-base';



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        
        <View>
        <Text style={{textAlign:'center', fontSize:30, fontWeight:"bold", marginBottom:20}}>Recover Your Password</Text>
        <Text style={{textAlign:'center', fontSize:17, color:'gray', margin:10, marginLeft:50, marginRight:50}}>Enter the email address you used to sign up</Text>
          <Form>
            <Item style={styles.inputStyle}>
              <Input placeholder="email" />
            </Item>
          </Form>
        <Text style={{textAlign:'center', fontSize:17, color:'gray', margin:10, marginLeft:50, marginRight:50}}>We'll send you instructions on how to reset your password.</Text>
        </View>

          <Button
           style ={{width:width/1.1, alignSelf:'center', marginTop: 20}}
           block success>
            <Text style={{color: 'white'}}>Send Instructions</Text>
          </Button>
          <Button
           style ={{width:width/1.1, alignSelf:'center', marginTop: 20}}
           block info>
            <Text style={{color: 'white'}}>Cancel</Text>
          </Button>


          

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
    borderColor:'black',
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
