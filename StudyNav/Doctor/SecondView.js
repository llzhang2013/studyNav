import React from 'react';
import { View, Text,Button,StyleSheet,Image,SafeAreaView} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class SecondView extends React.Component {
    
        render() {
            return (
                <SafeAreaView >
                <Text>这是第二个模块</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}
                        title="打开抽屉"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('detail')}
                        title="去详情页面"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('First')}
                        title="去第一个模块"
                    />
                </SafeAreaView>
            );
        }
    }