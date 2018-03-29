
import React from 'react';
import { View, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="model"
          color="red"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => 
          this.props.navigation.navigate(
          'Details',
          {
            itemId: 86,
            otherParam: 'anything you want here',
        })}
      />
       
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  
    static navigationOptions = ({ navigation,navigationOptions }) => {
      const { params } = navigation.state;
      
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
       // headerTintColor: 'red',
      //  headerStyle: {
      //   backgroundColor: navigationOptions.headerTintColor,
      // },
     // headerTintColor: navigationOptions.headerStyle.backgroundColor,
      }
    };
    render() {
  
     // Alternatively, if you want to access the params directly (eg. through this.props.itemId), you may use a community-developed react-navigation-props-mapper package.
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
      />
        </View>
      );
    }
  }



class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    /* Same configuration as before */
  }
);
const RootStack = StackNavigator(
  {
   
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
   
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}