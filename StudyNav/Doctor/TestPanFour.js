
import React from 'react';
import { View, Text, Button, StyleSheet, PanResponder, TouchableOpacity,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView';
import FirstRoot from './FirstRoot';
import TopBackView from './TopBackView'

var CIRCLE_SIZE = 80;
export default class TestPanFour extends React.Component {

    componentWillMount() { 
        this.responder = PanResponder.create({
            onStartShouldSetPanResponder: this.onStartShouldSetResponder,
            onMoveShouldSetPanResponder: this.onMoveShouldSetResponder,
          onPanResponderGrant:this.onResponderGrant,
          onPanResponderMove:this.onResponderMove
          
        });
    }
   
    render(){
        return(
            <View>
            
            <View 
                style={{backgroundColor:'pink',width:200,height:200}}
                {...this.responder.panHandlers}> 
                
            </View>
            </View>
        )

    }

    //实现了这个 点击屏幕时会调用 但是在屏幕上滑动时也不会调用onMoveShouldSetResponder 
    //但是会走onResponderMove
    onStartShouldSetResponder(e){
        console.log('zzzzz2-onStartShouldSetResponder');
        return true;

    }
    onMoveShouldSetResponder(e){
        console.log('zzzzz2-onMoveShouldSetResponder');
        return true;

    }
    onResponderGrant(e){
        console.log('zzzzz2-onResponderGrant');


    }
    onResponderMove(e){
        console.log('zzzzz2-onResponderMove');
    }

    

}

var styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    container: {
        flex: 1,
        paddingTop: 64,
    },
});


