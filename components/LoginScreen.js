import React from 'react';
import { StyleSheet, Text, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image 
        source={require('../assets/chipp_startup_solution.jpg')} 
        style={styles.imageStyle}
        />
          <Form>
            <Item style={styles.inputStyle}>
              <Input placeholder="username" />
            </Item>
            <Item style={styles.inputStyle}>
              <Input placeholder="password" />
            </Item>
          </Form>
        
          <Button
           style ={{width:width/1.1, alignSelf:'center', marginTop: 10}}
           block info>
            <Text style={{color: 'white'}}>Log In</Text>
          </Button>

          <Text>Don't have an account? Sign Up.</Text>

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
