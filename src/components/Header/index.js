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

  drawerMenu = () => {
    const { navigation } = this.props;

    navigation.navigate("AppDrawerNavigator");
  };

  render() {
    const { title, usuario, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icon name="bars" size={18} style={styles.icon} />
        </TouchableOpacity>
        {/*<View style={styles.left} />*/}
        <View style={styles.headerCenter}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.user}>{usuario}</Text>
        </View>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={18} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
