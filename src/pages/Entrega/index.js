import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "˜/services/api";

import { View, Text, ActivityIndicator, FlatList } from "react-native";
import Header from "˜/Components/Header";

import styles from "./styles";

export default class Entrega extends Component {
  state = {
    user: "",
    data: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
    this.loadAtend();
  }

  loadAtend = async () => {
    this.setState({ refreshing: true });

    const user = await AsyncStorage.getItem("@Login:usuario");
    this.setState({ user });

    const { data } = await api.get("entrega");
    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{item.ATEND_NUMERO}</Text>
        <Text>{item.ATEND_LOCAL}</Text>
      </View>
    );
  };

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        style={styles.containerList}
        data={data}
        keyExtractor={item => String(item.ATEND_NUMERO)}
        renderItem={this.renderListItem}
        onRefresh={this.loadAtend}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Entregas" usuario={this.state.user} />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
