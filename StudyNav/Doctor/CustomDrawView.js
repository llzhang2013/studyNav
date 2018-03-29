import { DrawerItems, SafeAreaView } from 'react-navigation';
import React from 'react';
import { View, Text,Button,StyleSheet,Image,ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';

let color ;
  //  { console.log('activeItemKey'+props.activeItemKey)}
    // {console.log(props.navigation)}
const CustomDrawView = (props) => (
    
  <ScrollView style={{backgroundColor:'#F5CD21'}}>
  
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Text>标题</Text>
    <View style={{backgroundColor:'white',width:200}}>
    <Button 
    title='刷新'
    onPress={() => {
        props.navigation.navigate('DrawerToggle');
    }
    }/>
 
    <Button 
    title='设置'
   // color={props.navigation.state.activeItemKey==='set'?'red':'blue'}
    onPress={() => props.navigation.navigate('set')}
    />
    <Button 
        title='模块一'
        color={props.activeItemKey==='First'?'red':'blue'}
        onPress={() => props.navigation.navigate('First')}
    />
    <Button 
    title='模块二'
    color={props.activeItemKey==='Second'?'red':'blue'}
    onPress={() => props.navigation.navigate('Second')}
/>
    </View>
   
 
    </SafeAreaView>
  </ScrollView>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CustomDrawView;
//export default  withNavigation(CustomDrawView);