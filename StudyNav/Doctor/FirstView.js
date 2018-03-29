
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import NavTopView from './NavTopView'

export default class FirstView extends React.Component {

    render() {
        return (
            <View >
            <NavTopView />
            <View style={{backgroundColor:"white",width:100,height:100}}/>
            <Text>这是第一个页面</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="打开抽屉"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerClose')}
                    title="关闭"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('detail')}
                    title="去详情页面"
                />
                <Button
                onPress={() => this.props.navigation.navigate('Second')}
                title="去第二个模块"
            />
            </View>
        );
    }
}