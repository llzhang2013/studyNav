
import React from 'react';
import { View, Text, Button, StyleSheet, PanResponder, TouchableOpacity,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView';
import FirstRoot from './FirstRoot';
import TopBackView from './TopBackView'

var CIRCLE_SIZE = 80;
export default class TestPanTwo extends React.Component {

    onStartShouldSetResponderCapture() {
        console.log('zzz-onStartShouldSetResponderCapture')
        return false;
    }
    handleMoveShouldSetPanResponder(e, gestureState) {
         console.log('zzz-handleMoveShouldSetPanResponder='+gestureState.dx+'gestureState.dy='+gestureState.dy);
        const x = Math.round(Math.abs(gestureState.dx));
        const y = Math.round(Math.abs(gestureState.dy));

        const touchMoved = x > 10 && y < 10;
        console.log('zzz-handleMoveShouldSetPanResponder'+'+'+'x='+x+' '+'y='+y+'touchMoved='+touchMoved);
        return touchMoved;
     ////   return true;
     return true;

    }
    
    handlePanResponderMove(e, gestureState) {
        console.log('zzz-handlePanResponderMove='+gestureState.dx+'gestureState.dy='+gestureState.dy);
        if (gestureState.dx > 10 && gestureState.dy < 10 && gestureState.dy > -10) {
            this.props.navigation.navigate('DrawerOpen')
            console.log('满足');
        }
       // console.log(gestureState, gestureState.vy);

    }
    handlePanResponderEnd(e, gestureState) {
        console.log('zzz-handlePanResponderEnd='+gestureState.dx+'gestureState.dy='+gestureState.dy);


    }
    // onStartShouldSetResponder(){
    //     console.log('zzz-onStartShouldSetResponder');
    //     return false;

    // }
   

    componentWillMount() {
        //  this.__handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
        this.responder = PanResponder.create({
          //  onStartShouldSetResponder:this.onStartShouldSetResponder.bind(this),


            onStartShouldSetResponderCapture: this.onStartShouldSetResponderCapture.bind(this),
            onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this),
            onPanResponderMove: this.handlePanResponderMove.bind(this),
            onPanResponderRelease: this.handlePanResponderEnd.bind(this),
        });
    }

    render() {
        return (
  
                <ScrollView style={{ backgroundColor: 'red', flex: 1 }} {...this.responder.panHandlers}>
                    <TouchableOpacity
                        style={{ width: 300, height: 300, backgroundColor: 'gray',marginBottom:50 }}
                        onPress={() => {
                            //this.props.navigation.goBack();
                            this.props.navigation.navigate('Second');
                            console.log('zll返回点击');
                        }
                        }
                    />
                    <TouchableOpacity
                    style={{ width: 300, height: 300, backgroundColor: 'gray',marginBottom:50 }}
                    onPress={() => {
                        this.props.navigation.goBack();
                        console.log('zll返回点击');
                    }
                    }
                />
                <TouchableOpacity
                style={{ width: 300, height: 300, backgroundColor: 'gray',marginBottom:50 }}
                onPress={() => {
                    this.props.navigation.goBack();
                    console.log('zll返回点击');
                }
                }
            />
            <TouchableOpacity
            style={{ width: 300, height: 300, backgroundColor: 'gray',marginBottom:50 }}
            onPress={() => {
                this.props.navigation.goBack();
                console.log('zll返回点击');
            }
            }
        />
                    
                </ScrollView>
            
        );
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


