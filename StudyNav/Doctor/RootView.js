import React from 'react';
import { View, Text,Button,StyleSheet,Image} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CustomDrawView from './CustomDrawView'


import FirstView from './FirstView';
import SecondView from './SecondView';
import FirstRoot from './FirstRoot';
import SecondRoot from './SecondRoot';
import DrawView from './DrawView';
import SetRoot from './SetRoot'
import LoginRoot from './LoginRoot'

const initialRouteName = 'First';

const RootStack = DrawerNavigator(
    { 
      login:{
        screen:LoginRoot,
        // navigationOptions:{
        //   drawerLockMode:'locked-closed'
        // }
      },
      First: {
        screen: FirstRoot,
      },
      Second: {
        screen: SecondRoot,
      },
      set:{
        screen:SetRoot
      },
   
    },
    {
      contentComponent:CustomDrawView,
      contentOptions:{},
      initialRouteName:initialRouteName,
     // drawerLockMode:'locked-closed'
      
    }
  );
//   <RootStack
//   screenProps={{drawerLockMode:'locked-closed'}}
// />
 
    
  export default class RootView extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  
  


