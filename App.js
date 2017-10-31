import React from 'react';

import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen.js'
import SearchScreen from './SearchScreen.js'




const SimpleApp = StackNavigator({
  Home: { screen: SearchScreen },
  MainScreen: { screen: MainScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
