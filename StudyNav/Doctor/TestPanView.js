
import React from 'react';
import { View, Text, Button,StyleSheet,PanResponder } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView';
import FirstRoot from './FirstRoot';
import TopBackView from './TopBackView'

var CIRCLE_SIZE = 80;
export default class DetailView extends React.Component {

    // constructor(props) {
    //     super(props);
    //     _panResponder = {},
    //     _previousLeft =  0,
    //     _previousTop = 0,
    //     _circleStyles = {},
        
    // }

    componentWillMount() {
      //  this.__handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
        this._panResponder = PanResponder.create({
          onStartShouldSetResponder:this._handleOnStartShouldSetResponder.bind(this),
          onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
          onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
          onPanResponderGrant: this._handlePanResponderGrant.bind(this),
          onPanResponderMove: this._handlePanResponderMove.bind(this),
          onPanResponderRelease: this._handlePanResponderEnd.bind(this),
          onPanResponderTerminate: this._handlePanResponderEnd.bind(this),

          onStartShouldSetResponderCapture:this._onStartShouldSetResponderCapture.bind(this)

        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
          style: {
            left: this._previousLeft,
            top: this._previousTop,
            backgroundColor: 'green',
          }
        };
      }
    
      componentDidMount() {
        this._updateNativeStyles();
      
      }

      _onStartShouldSetResponderCapture(e, gestureState){
        return false;
      }

      _handleOnStartShouldSetResponder(e, gestureState){
        return false;
        

      }

    render(){
        return (
          <View style={{backgroundColor:'pink',flex:1}}>
          <TopBackView />
          <View
            style={{backgroundColor:'red',flex:1}}
            {...this._panResponder.panHandlers}
            >
            <Button title='点击' onPress={()=>alert('啊哈哈')} />
            
            <View style={{backgroundColor:"green",width:300,height:300}}/> 
            
          </View>
          </View>
        );
    }

      _highlight(){
        this._circleStyles.style.backgroundColor = 'blue';
        this._updateNativeStyles();
      }
    
      _unHighlight(){
        this._circleStyles.style.backgroundColor = 'green';
        this._updateNativeStyles();
      }
    
      _updateNativeStyles() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
      }
    
      _handleStartShouldSetPanResponder(e, gestureState) {
        // Should we become active when the user presses down on the circle?
      
        return true;
      }
    
      _handleMoveShouldSetPanResponder(e, gestureState){
        // Should we become active when the user moves a touch over the circle?
        return true;
      }
    
      _handlePanResponderGrant(e, gestureState) {
        this._highlight();
      }
      _handlePanResponderMove(e, gestureState) {
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updateNativeStyles();
        if(gestureState.dx>5&&gestureState.dy<5&&gestureState.dy>-5){
            this.props.navigation.navigate('DrawerOpen')
            console.log('满足');
        }
        console.log(gestureState,gestureState.vy);
      }
      _handlePanResponderEnd(e, gestureState) {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
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


