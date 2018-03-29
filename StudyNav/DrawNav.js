
import React from 'react';
import { View, Text,Button,StyleSheet,Image} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CustomDrawerContentComponent from  './CustomDrawerContentComponent'
import App from './App'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'first',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/discuss_logo.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View >
        <Button
        onPress={() => this.props.navigation.navigate('DrawerToggle')}
        title="打开抽屉"
      />
      <Button
      onPress={() => this.props.navigation.navigate('DrawerClose')}
      title="关闭"
    />
        <Button
          onPress={() => this.props.navigation.navigate('Second')}
          title="go to Second"
        />
        </View>
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      // headerLeft: (
      //   <Button
      //   onPress={() => this.props.navigation.navigate('DrawerToggle')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),//不起作用
      drawerLabel: 'Second',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/default_system.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View >
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go to first1"
        />

        <Button
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
         title="打开抽屉"
           
           />

        </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyApp = DrawerNavigator({
    First: {
      screen: MyHomeScreen,
    },
    Second: {
      screen: App,
    },
    
  },
  {
    drawerWidth:300,
    //drawerPosition:"right",
    drawerBackgroundColor:"pink",
   // useNativeAnimations:'false',
    contentComponent:CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
        backgroundColor:"red"
      }
    }

    

  });
  export default MyApp;
  