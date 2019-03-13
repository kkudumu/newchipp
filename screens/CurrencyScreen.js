import React from 'react';
import { StyleSheet, Dimensions, View, Platform } from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Text, Thumbnail, Icon, Drawer } from 'native-base';
import { Col,Grid } from 'react-native-easy-grid';
import { DrawerActions } from 'react-navigation';
import LoginScreen from './LoginScreen';
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
        
         <Text style={{color:'white',fontSize:40}}>Currencies</Text>
 
          <MenuButton/>   
        </Header>
        <Content>
          <List>

          
          <ListItem 
           onPress={() => this.props.navigation.navigate('AUDCAD')}>
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>AUDCAD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            
            <ListItem
            onPress={() => this.props.navigation.navigate('AUDCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>AUDCHF</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            
            <ListItem
            onPress={() => this.props.navigation.navigate('AUDJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>AUDJPY</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            
            <ListItem
            onPress={() => this.props.navigation.navigate('AUDNZD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>AUDNZD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            
            <ListItem
            onPress={() => this.props.navigation.navigate('AUDUSD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>AUDUSD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('CADCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>CADCHF</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('CADJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>CADJPY</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('CHFJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>CHFJPY</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURAUD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURAUD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURCAD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURCAD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURCHF</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURGBP')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURGBP</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURJPY</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('EURNZD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>EURNZD</Text>
            </Col>
          </Grid>
          </Grid>
            </ListItem>

            <BlinkView style={{backgroundColor: '#a4f4b4'}} blinking={true} delay={1000}>
            <ListItem 
            onPress={() => this.props.navigation.navigate('EURUSD')}
            >
            <Grid>
            <Col style={{justifyContent:'center',height:50}}> 
            <Text style={styles.listText}>EURUSD</Text>
            </Col>
          </Grid>
            </ListItem>
            </BlinkView>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPAUD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPAUD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPCAD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPCAD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPCHF</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPJPY</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPNZD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPNZD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('GBPUSD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>GBPUSD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('NZDCAD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>NZDCAD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('NZDCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>NZDCHF</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('NZDJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>NZDJPY</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('NZDUSD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>NZDUSD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('USDCAD')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>USDCAD</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('USDCHF')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>USDCHF</Text>
            </Col>
            </Grid>
            </Grid>
            </ListItem>

            <ListItem
            onPress={() => this.props.navigation.navigate('USDJPY')}
            >
            <Grid>
            <Grid>
            <Col style={styles.thumbnail}>
            <Text style={styles.listText}>USDJPY</Text>
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
