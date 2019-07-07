import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const usuario = await AsyncStorage.getItem('@Login:usuario');

    this.setState({
      userChecked: true,
      userLogged: !!usuario,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}