import { DrawerItems, SafeAreaView } from 'react-navigation';
import React from 'react';
import { View, Text,Button,StyleSheet,Image,ScrollView} from 'react-native';

const CustomDrawerContentComponent = (props) => (
  <ScrollView style={{backgroundColor:"white"}}>
  
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Text>标题</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default  CustomDrawerContentComponent