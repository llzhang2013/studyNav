
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import NavTopView from './NavTopView'

class HomeScreen extends React.Component{
    render(){
        return <View style={{flex:1,backgroundColor:'#fe7474'}}>
        <NavTopView />
        <Button title='退出' onPress={()=>this.props.navigation.navigate('login')}/>
        </View>
    }

}

const RootStack = StackNavigator(
    {

        home: {
            screen:HomeScreen ,
        },
        
    },
    {
        headerMode: 'none',
       
    }
);

export default RootStack;

