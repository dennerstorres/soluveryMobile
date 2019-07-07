import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();

    navigation.navigate("Login");
  };

  render() {
    const { title, usuario } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left} />
        <View style={styles.headerCenter}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.user}>{usuario}</Text>
        </View>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
