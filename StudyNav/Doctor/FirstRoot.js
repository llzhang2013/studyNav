
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import DetailView from './DetailView';
import TestPanView from './TestPanView';
import TestPanTwo from './TestPanTwo';

//每一个模块的root
const RootStack = StackNavigator(
    {

        home: {
            screen: FirstView,
        },
        detail: {
            screen: TestPanTwo,
        },
    },
    {
        headerMode: 'none',
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: '#f4511e',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     },
        // },
        
        //     headerLeft: (
        //       <Button
        //       onPress={() => this.props.navigation.navigate('DrawerToggle')}
        //         title="Info"
        //         color="#fff"
        //       />)
          
    }
);

export default RootStack 

