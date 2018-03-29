
import React from 'react';
import { View, Text, Button, StyleSheet, PanResponder, TouchableOpacity,ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView';
import FirstRoot from './FirstRoot';
import TopBackView from './TopBackView';
import TestPanFour from './TestPanFour';


var CIRCLE_SIZE = 80;
export default class TestPanThree extends React.Component {

    componentWillMount() { 
        this.responder = PanResponder.create({
            onStartShouldSetPanResponder: this.onStartShouldSetResponder,
            onMoveShouldSetPanResponder: this.onMoveShouldSetResponder,
          onPanResponderGrant:this.onResponderGrant,
          onPanResponderMove:this.onResponderMove
          
        });
    }
     /*IOS 如果是点击的话先响应上面的  如果是移动的话先响应下面的
     点击 ios不响应下面的移动  安卓响应下面的移动
     2018-03-01 09:05:51.048 [info][tid:com.facebook.react.JavaScript] zzzzz2-onStartShouldSetResponder
2018-03-01 09:05:51.049 [info][tid:com.facebook.react.JavaScript] zzzzz2-onResponderGrant

移动 安卓ios都响应下面的移动
2018-03-01 09:06:55.308 [info][tid:com.facebook.react.JavaScript] zzzzz2-onStartShouldSetResponder
2018-03-01 09:06:55.309 [info][tid:com.facebook.react.JavaScript] zzzzz2-onResponderGrant
2018-03-01 09:06:55.418 [info][tid:com.facebook.react.JavaScript] zzzzz-onMoveShouldSetResponder
2018-03-01 09:06:55.419 [info][tid:com.facebook.react.JavaScript] zzzzz-onResponderGrant
2018-03-01 09:06:55.435 [info][tid:com.facebook.react.JavaScript] zzzzz-onResponderMove
2018-03-01 09:06:55.451 [info][tid:com.facebook.react.JavaScript] zzzzz-onResponderMove

     */
     
     
 /*安卓 如果是点击 先响应上面的 在响应下面的移动
     03-01 17:02:25.561 25005-21483/com.studynav I/ReactNativeJS: zzzzz2-onStartShouldSetResponder
03-01 17:02:25.562 25005-21483/com.studynav I/ReactNativeJS: zzzzz2-onResponderGrant
03-01 17:02:25.628 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onMoveShouldSetResponder
03-01 17:02:25.631 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderGrant
03-01 17:02:25.646 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderMove
移动 和点击一样
03-01 17:04:48.738 25005-21483/com.studynav I/ReactNativeJS: zzzzz2-onStartShouldSetResponder
03-01 17:04:48.740 25005-21483/com.studynav I/ReactNativeJS: zzzzz2-onResponderGrant
03-01 17:04:48.770 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onMoveShouldSetResponder
03-01 17:04:48.771 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderGrant
03-01 17:04:48.804 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderMove
03-01 17:04:48.838 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderMove
03-01 17:04:48.871 25005-21483/com.studynav I/ReactNativeJS: zzzzz-onResponderMove
*/
     
    render(){
        return(
            <View  style={{flex:1}}>
            <TopBackView />
            <View 
                style={{backgroundColor:'red',flex:1}}
                {...this.responder.panHandlers}> 
                <TestPanFour />
            </View>
            </View>
        )

    }

    //实现了这个 点击屏幕时会调用 但是在屏幕上滑动时也不会调用onMoveShouldSetResponder 
    //但是会走onResponderMove
    onStartShouldSetResponder(e){
        console.log('zzzzz-onStartShouldSetResponder');
        return true;

    }
    onMoveShouldSetResponder(e){
        console.log('zzzzz-onMoveShouldSetResponder');
        return true;

    }
    onResponderGrant(e){
        console.log('zzzzz-onResponderGrant');


    }
    onResponderMove(e){
        console.log('zzzzz-onResponderMove');
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


