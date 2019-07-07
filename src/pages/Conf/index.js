import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";

import { View, StatusBar } from "react-native";

import styles from "./styles";

export default class Conf extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.loadConf();
  }

  loadConf = async () => {
    const user = await AsyncStorage.getItem("@Login:usuario");
    this.setState({ user });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header title="Configurações" usuario={this.state.user} />
      </View>
    );
  }
}
