import React from 'react';
import {  StyleSheet, Dimensions, View, Platform } from 'react-native';
import { Container, Header, Content, Item, Input, Button, List, ListItem, Text, Thumbnail, Icon, Drawer, Picker, Form } from 'native-base';
import { Col,Grid } from 'react-native-easy-grid';
import MenuButton from '../components/MenuButton';
import * as firebase from 'firebase';
import {f, auth, database, firestore} from '../config/config';
import 'firebase/firestore';




var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class AdminScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currencySelected: undefined,
          legSelected: undefined,
          directionSelected: undefined,
          orderSelected: undefined,
          entryPrice: undefined,
          takeProfitPrice: undefined
        };
        this.onSendSignalTapped = this.onSendSignalTapped.bind(this);
      }





      onCurrencyValueChange(value: string) {
        this.setState({

          currencySelected: value
        });
      }

      onLegValueChange(value: string) {
        this.setState({
       
          legSelected: value
        });
      }

      onDirectionValueChange(value: string) {
        this.setState({
       
          directionSelected: value
        });
      }

      onOrderValueChange(value: string) {
        this.setState({
       
          orderSelected: value
        });
      }

      static navigationOptions = {
        header: null,
    }


    onSendSignalTapped(){
      
      if(this.state.currencySelected ==="AUDCAD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('AUDCAD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('AUDCAD')
      }

      if(this.state.currencySelected ==="AUDCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('AUDCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('AUDCHF')
      }


      if(this.state.currencySelected ==="AUDJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('AUDJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('AUDJPY')
      }


      if(this.state.currencySelected ==="AUDNZD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('AUDNZD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('AUDNZD')
      }


      if(this.state.currencySelected ==="AUDUSD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('AUDUSD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('AUDUSD')
      }


      if(this.state.currencySelected ==="CADCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('CADCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        
        this.props.navigation.navigate('CADCHF')
      }

      if(this.state.currencySelected ==="CADJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('CADJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('CADJPY')
      }

      if(this.state.currencySelected ==="CHFJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('CHFJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('CHFJPY')
      }

      if(this.state.currencySelected ==="EURAUD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURAUD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('EURAUD')
      }

      if(this.state.currencySelected ==="EURCAD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURCAD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('EURCAD')
      }

      if(this.state.currencySelected ==="EURCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('EURCHF')
      }

      if(this.state.currencySelected ==="EURGBP"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURGBP').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('EURGBP')
      }

      if(this.state.currencySelected ==="EURJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('EURJPY')
      }

      if(this.state.currencySelected ==="EURNZD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURNZD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('EURNZD')
      }

      if(this.state.currencySelected ==="EURUSD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('EURUSD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('EURUSD')
      }

      if(this.state.currencySelected ==="GBPAUD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPAUD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('GBPAUD')
      }

      if(this.state.currencySelected ==="GBPCAD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPCAD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('GBPCAD')
      }

      if(this.state.currencySelected ==="GBPCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('GBPCHF')
      }

      if(this.state.currencySelected ==="GBPJPY"){

        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('GBPJPY')
      }

      if(this.state.currencySelected ==="GBPNZD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPNZD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('GBPNZD')
      }

      if(this.state.currencySelected ==="GBPUSD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('GBPUSD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('GBPUSD')
      }
      
      if(this.state.currencySelected ==="NZDCAD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('NZDCAD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        this.props.navigation.navigate('NZDCAD')
      }

      if(this.state.currencySelected ==="NZDCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('NZDCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('NZDCHF')
      }

      if(this.state.currencySelected ==="NZDJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('NZDJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('NZDJPY')
      }

      if(this.state.currencySelected ==="NZDUSD"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('NZDUSD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('NZDUSD')
      }

      if(this.state.currencySelected ==="USDCAD"){
                if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('USDCAD').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('USDCAD')
      }

      if(this.state.currencySelected ==="USDCHF"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('USDCHF').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('USDCHF')
      }

      if(this.state.currencySelected ==="USDJPY"){
        if(this.state.legSelected ==="Leg 1"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 1').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 2"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 2').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 3"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 3').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 4"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 4').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 5"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 5').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 6"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 6').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 7"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 7').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 8"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 8').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 9"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 9').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 10"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 10').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 11"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 11').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 12"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 12').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 13"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 13').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 14"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 14').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 15"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 15').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 16"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 16').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 17"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 17').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 18"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 18').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 19"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 19').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 20"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 20').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 21"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 21').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 22"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 22').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 23"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 23').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 24"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 24').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }
        if(this.state.legSelected ==="Leg 25"){
          firestore.collection('Currencies').doc('USDJPY').collection('Legs').doc('Leg 25').set({
            leg:this.state.legSelected,
            direction:this.state.directionSelected,
            order:this.state.orderSelected,
            entry:this.state.entryPrice,
            takeprofit:this.state.takeProfitPrice
          })
        }

        this.props.navigation.navigate('USDJPY')
      }

      var docRef = firestore.collection("Currencies").doc("AUDCAD");

      docRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

      console.log(this.state.currencySelected);
      console.log(this.state.legSelected);
      console.log(this.state.directionSelected);
      console.log(this.state.orderSelected);
      console.log(this.state.entryPrice);
      console.log(this.state.takeProfitPrice);
      // return this.state.sampleString
  }




  render() {
    return (
<Container>
        <Header
        style={styles.header}
         >
        
         <Text style={{color:'white',fontSize:25, top:11}}>Update Currency</Text>
 
          <MenuButton/>   
        </Header>
        <Content>
          <List>


            
        {/* Select The Currency */}
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select The Currency"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.currencySelected}
              onValueChange={this.onCurrencyValueChange.bind(this)}
            >
              <Picker.Item label="AUDCAD" value="AUDCAD" />
              <Picker.Item label="AUDCHF" value="AUDCHF" />
              <Picker.Item label="AUDJPY" value="AUDJPY" />
              <Picker.Item label="AUDNZD" value="AUDNZD" />
              <Picker.Item label="AUDUSD" value="AUDUSD" />
              <Picker.Item label="CADCHF" value="CADCHF" />
              <Picker.Item label="CADJPY" value="CADJPY" />
              <Picker.Item label="CHFJPY" value="CHFJPY" />
              <Picker.Item label="EURAUD" value="EURAUD" />
              <Picker.Item label="EURCAD" value="EURCAD" />
              <Picker.Item label="EURCHF" value="EURCHF" />
              <Picker.Item label="EURGBP" value="EURGBP" />
              <Picker.Item label="EURJPY" value="EURJPY" />
              <Picker.Item label="EURNZD" value="EURNZD" />
              <Picker.Item label="EURUSD" value="EURUSD" />
              <Picker.Item label="GBPAUD" value="GBPAUD" />
              <Picker.Item label="GBPCAD" value="GBPCAD" />
              <Picker.Item label="GBPCHF" value="GBPCHF" />
              <Picker.Item label="GBPJPY" value="GBPJPY" />
              <Picker.Item label="GBPNZD" value="GBPNZD" />
              <Picker.Item label="GBPUSD" value="GBPUSD" />
              <Picker.Item label="NZDCAD" value="NZDCAD" />
              <Picker.Item label="NZDCHF" value="NZDCHF" />
              <Picker.Item label="NZDJPY" value="NZDJPY" />
              <Picker.Item label="NZDUSD" value="NZDUSD" />
              <Picker.Item label="USDCAD" value="USDCAD" />
              <Picker.Item label="USDCHF" value="USDCHF" />
              <Picker.Item label="USDJPY" value="USDJPY" />

            </Picker>
          </Form>
        
        {/* Select The Leg */}
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select The Leg"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.legSelected}
              onValueChange={this.onLegValueChange.bind(this)}
            >
              <Picker.Item label="Leg 1" value="Leg 1" />
              <Picker.Item label="Leg 2" value="Leg 2" />
              <Picker.Item label="Leg 3" value="Leg 3" />
              <Picker.Item label="Leg 4" value="Leg 4" />
              <Picker.Item label="Leg 5" value="Leg 5" />
              <Picker.Item label="Leg 6" value="Leg 6" />
              <Picker.Item label="Leg 7" value="Leg 7" />
              <Picker.Item label="Leg 8" value="Leg 8" />
              <Picker.Item label="Leg 9" value="Leg 9" />
              <Picker.Item label="Leg 10" value="Leg 10" />
              <Picker.Item label="Leg 11" value="Leg 11" />
              <Picker.Item label="Leg 12" value="Leg 12" />
              <Picker.Item label="Leg 13" value="Leg 13" />
              <Picker.Item label="Leg 14" value="Leg 14" />
              <Picker.Item label="Leg 15" value="Leg 15" />
              <Picker.Item label="Leg 16" value="Leg 16" />
              <Picker.Item label="Leg 17" value="Leg 17" />
              <Picker.Item label="Leg 18" value="Leg 18" />
              <Picker.Item label="Leg 19" value="Leg 19" />
              <Picker.Item label="Leg 20" value="Leg 20" />
              <Picker.Item label="Leg 21" value="Leg 21" />
              <Picker.Item label="Leg 22" value="Leg 22" />
              <Picker.Item label="Leg 23" value="Leg 23" />
              <Picker.Item label="Leg 24" value="Leg 24" />
              <Picker.Item label="Leg 25" value="Leg 25" />
              


            </Picker>
          </Form>

        {/* Select The Direction */}
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select The Direction"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.directionSelected}
              onValueChange={this.onDirectionValueChange.bind(this)}
            >
              <Picker.Item label="Long" value="Long" />
              <Picker.Item label="Short" value="Short" />

            </Picker>
          </Form>

        {/* Select The Order Type */}
            <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select The Order Type"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.orderSelected}
              onValueChange={this.onOrderValueChange.bind(this)}
            >
              <Picker.Item label="Buy" value="Buy" />
              <Picker.Item label="Sell" value="Sell" />
              <Picker.Item label="Buy Stop" value="Buy Stop" />
              <Picker.Item label="Sell Stop" value="Sell Stop" />
              <Picker.Item label="Buy Limit" value="Buy Limit" />
              <Picker.Item label="Sell Limit" value="Sell Limit" />

            </Picker>
          </Form>




        {/* Entry Price / Take Profit Price */}
          <Form>
          <Item style={styles.inputStyle}>
              <Input 
              onChangeText={(text) => this.setState({entryPrice: text})}
              placeholder="Entry Price..." />
            </Item>
            <Item style={styles.inputStyle}>
              <Input 
              onChangeText={(text) => this.setState({takeProfitPrice: text})}
              placeholder="Take Profit Price..." />
            </Item>
          </Form>
          </List>
          <Button
           style ={{width:width/1.1, alignSelf:'center', marginTop: 10}}
           onPress={() =>{ 
           this.onSendSignalTapped()
          //  this.props.navigation.navigate('SignalScreen')}
           }}
           block info
           >
            <Text style={{color: 'white'}}>Send Signal</Text>
          </Button>

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
    }
  
  });
