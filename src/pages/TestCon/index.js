import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";

import { View, StatusBar } from "react-native";

import style from "./styles";

export default class TestCon extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const user = await AsyncStorage.getItem("@Login:usuario");
    this.setState({ user });
  };

  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" />
        <Header title="Teste Conexão" usuario={this.state.user} />
      </View>
    );
  }
}
