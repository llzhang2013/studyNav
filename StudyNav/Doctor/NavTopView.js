import React from 'react';
import { View, Text,Button,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

 class NavTopView extends React.Component{
    render(){
        return <View style={{height:64,marginLeft:0,marginRight:0,backgroundColor:'pink'}}>
        <TouchableOpacity
        style={{backgroundColor:'red',width:50,height:50}}
        onPress={() => this.props.navigation.navigate('DrawerToggle')}
        >
        <Text>打开</Text>
        </TouchableOpacity>
       
         
  </View>
    }
}
export default withNavigation(NavTopView);