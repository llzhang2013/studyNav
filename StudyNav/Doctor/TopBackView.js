import React from 'react';
import { View, Text,Button,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

 class TopBackView extends React.Component{
    render(){
        return <View style={{height:64,marginLeft:0,marginRight:0,backgroundColor:'#3EB6F2'}}>
        <TouchableOpacity
        style={{width:50,height:50}}
        onPress={() => {
            this.props.navigation.goBack();
            console.log('返回点击');
        }
            
         }
        >
        <Text>返回</Text>
        </TouchableOpacity>       
  </View>
    }
}
export default withNavigation(TopBackView);