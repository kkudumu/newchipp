import React from 'react';
import { StyleSheet, Dimensions, View, Platform } from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Text, Thumbnail, Icon, Drawer } from 'native-base';
import { Col,Grid } from 'react-native-easy-grid';
import { DrawerActions } from 'react-navigation';
import {auth, storage, settings, firestore } from '../../config/config';
import MenuButton from '../../components/MenuButton';
import * as firebase from 'firebase';
import 'firebase/firestore';



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//Work on getting Navigation Drawer to work. then work on getting users logged in, then work on the upload stuff. Then get the menu added


//Each list item would be generated based on Picture, Buy/Sell, Currency name/ Price\
//List Item Behavior When Tapped, Will go to screen with fuil chart image expanded with comments underneath.Room for questions from other users? Will Users need to be able to comment?
//List Item Will be able to be swiped left or right to remove or have other actions such as marking or commenting

//make sort for currencies
//Add Take profit field
//Add a field for leg
//chipp 2, fifo

//1st Column Will Hold L
//2nd Column Will hold BUY or SELL signal
//3rd Column Will Hold currency Name
//4th Column Will Hold Price

//be able to edit lines

export default class NZDJPYScreen extends React.Component {
  static navigationOptions = {
    header: null,
}


  render() {
    return (

      <Container>
        <Header
        style={styles.header}
         >
        {/* Put currency name in header instead of signals */}
         <Text style={{color:'white',fontSize:30}}>NZDJPY</Text>
 
          <MenuButton/>   
 
         {/* <Button 
         navigation ={this.props.navigation}
        //  onPress={() =>this.props.navigation.toggleDrawer()}
         style={{position: 'absolute', left:-5, bottom:12, backgroundColor:'#5183cb' }}>

         <Text><Icon style={{ fontSize:40, color:'white'}} name="menu"/></Text> 
     
         </Button> */}
         
        
        </Header>
      
        <Content>

          <List>         
           <ListItem style={{justifyContent:'center'}} itemHeader first>
              <Text style={{fontSize:20, position:'absolute', left:10 }}>Leg </Text>
              <Text style={{fontSize:20, position:'absolute', left:55, fontWeight:'bold' }}>1 </Text>
              <Text style={{fontSize:20, position:'absolute', right:85}}>Direction</Text>
              <Text style={{fontSize:20, position:'absolute', right:10, fontWeight:'bold' }}> Long </Text>
            </ListItem>

            
            <ListItem itemHeader first>
            <Grid>
            <Col style={styles.column}>
            <Text style={{}}>Active</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={{}}>Trade #</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={{}}>Entry</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={{}}>TP</Text>
            </Col>

          </Grid>
            </ListItem>

            <ListItem>
            <Grid>
            <Col style={styles.column}>
            <Text style={styles.listText}>8 hours</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={styles.listText}>T 1</Text>
            </Col>
            <Col style={styles.column}><Text style={styles.listText}>1.5000</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>1.6000</Text></Col>

          </Grid>
            </ListItem>
            
            <ListItem>
            <Grid>
            <Col style={styles.column}>
            <Text style={styles.listText}>7 hours</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={styles.listText}>T 2</Text>
            </Col>
            <Col style={styles.column}><Text style={styles.listText}> 1.6000</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>1.7000</Text></Col>

          </Grid>
            </ListItem>   

            <ListItem style={{justifyContent:'center', borderTopColor:'#5183cb', borderBottomColor: '#5183cb', borderWidth:1, borderBottomWidth:1}} itemHeader first>
              <Text style={{fontSize:20, position:'absolute', left:10 }}>Leg </Text>
              <Text style={{fontSize:20, position:'absolute', left:55, fontWeight:'bold' }}>2 </Text>
              <Text style={{fontSize:20, position:'absolute', right:85}}>Direction</Text>
              <Text style={{fontSize:20, position:'absolute', right:10, fontWeight:'bold' }}> Long </Text>
            </ListItem>
            

            <ListItem>
            <Grid>
            <Col style={styles.column}>
            <Text style={styles.listText}>8 hours</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={styles.listText}>T 1</Text>
            </Col>
            <Col style={styles.column}><Text style={styles.listText}>1.5000</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>1.6000</Text></Col>

          </Grid>
            </ListItem>
            
            <ListItem>
            <Grid>
            <Col style={styles.column}>
            <Text style={styles.listText}>7 hours</Text>
            </Col>
            <Col style={styles.column}>
            <Text style={styles.listText}>T 2</Text>
            </Col>
            <Col style={styles.column}><Text style={styles.listText}> 1.6000</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>1.7000</Text></Col>

          </Grid>
            </ListItem>

{/*             
            <ListItem>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>L1</Text>
            </Col>
            <Col style={styles.column}><Text style={styles.listText}>9 Hours</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>BUY</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>EURJPY</Text></Col>
            <Col style={styles.column}><Text style={styles.listText}>125.000</Text></Col>
          </Grid>
            </ListItem> */}

            

            

          </List>
        </Content>
      </Container>
      
      
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
  header: {
    height:75,
    backgroundColor:'#5183cb',
    flexDirection:'row',
    paddingTop:15
  },
  column: {
    justifyContent:'center',
    height:50,
  },
  thumbnail: {
    justifyContent:'center',
    height:50,
    width:50
  },
  listText: {
    ...Platform.select({
      ios: {
        
      },
      android: {
        fontSize:10
      },
    }),
    fontWeight: 'bold'
  }


});
