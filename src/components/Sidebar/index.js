import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";

import style from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import AsyncStorage from "@react-native-community/async-storage";

export default class Sidebar extends Component {
  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();

    navigation.navigate("Login");
  };

  conf = async () => {
    const { navigation } = this.props;

    navigation.navigate("Configurações");
  };

  testCon = async () => {
    const { navigation } = this.props;

    navigation.navigate("Conexão");
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" hidden={false} translucent="true" />
        <View style={style.header}>
          <View style={style.borderLogo}>
            <Image style={style.logo} source={logo} />
          </View>
          <Text style={style.title}>Solução Sistemas</Text>
          <Text style={style.subTitle}>SoluDelivery</Text>
        </View>
        <TouchableOpacity onPress={this.conf} style={style.button}>
          <Icon name="wrench" size={26} style={style.icon} />
          <Text style={style.textButton}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.testCon} style={style.button}>
          <Icon name="refresh" size={26} style={style.icon} />
          <Text style={style.textButton}>Testar Conexão</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signOut} style={style.button}>
          <Icon name="sign-out" size={26} style={style.icon} />
          <Text style={style.textButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
