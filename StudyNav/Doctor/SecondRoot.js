
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import DetailView from './DetailView';
import TestPanView from './TestPanView';
import TestPanThree from './TestPanThree'

const RootStack = StackNavigator(
    {

        home: {
            screen: SecondView,
        },
        detail: {
            screen: TestPanThree,
        },
    },
    {
        headerMode: 'none',
       
    }
);

export default RootStack;

