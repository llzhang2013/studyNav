
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView';
import FirstRoot from './FirstRoot'

class HomeScreen extends React.Component{
    render(){
        return <View style={{flex:1,backgroundColor:'white'}}>
        <Button title='登录' onPress={()=>this.props.navigation.navigate('First')}/>
        </View>
    }
}

const RootStack = StackNavigator(
    {

        home: {
            screen:HomeScreen ,
            navigationOptions:{
                drawerLockMode:'locked-closed'
              }
        },
        
    },
    {
        headerMode: 'none',
       
    }
);

export default RootStack;

