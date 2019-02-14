import React from 'react';
import { StyleSheet, Dimensions, View, Platform } from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Text, Thumbnail, Icon, Drawer } from 'native-base';
import { Col,Grid } from 'react-native-easy-grid';
import { DrawerActions } from 'react-navigation';
import MenuButton from '../components/MenuButton';
import BlinkView from 'react-native-blink-view'


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
//flashing green every second on signal sent

//1st Column Will Hold L
//2nd Column Will hold BUY or SELL signal
//3rd Column Will Hold currency Name
//4th Column Will Hold Price

export default class CurrencyScreen extends React.Component {
  static navigationOptions = {
    header: null,
}
  render() {
    return (

      <Container>
        <Header
        style={styles.header}
         >
        
         <Text style={{color:'white',fontSize:40}}>Signals</Text>
 
          <MenuButton/>   
        </Header>
        <Content>
          <List>
            <ListItem>
            <Grid>
            <Col style={{backgroundColor: '#a4f4b4',justifyContent:'center',height:50}}> 
            <BlinkView blinking={true} delay={1000}>
            <Text style={styles.listText}>EURUSD</Text>
            </BlinkView>
            </Col>
          </Grid>
            </ListItem>
            <ListItem>
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPCAD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>
            <ListItem>
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURJPY</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>
            

            

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
    // backgroundColor: '#a4f4b4'
  },
  listText: {
    ...Platform.select({
      ios: {
        fontSize:25
      },
      android: {
        fontSize:20
      },
    }),
    fontWeight: 'bold'
  }


});
