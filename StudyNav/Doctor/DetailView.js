import React from 'react';
import { View, Text,Button,StyleSheet,Image} from 'react-native';
import TopBackView from './TopBackView'


export default class DetailView extends React.Component {
    
        render() {
            return (
                <View >
                <TopBackView />
                <Text>这是详情页面</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}
                        title="打开抽屉"
                    />
                   
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="返回"
                    />
                </View>
            );
        }
    }