import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import PropTypes from "prop-types";

import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

import styles from "./styles";
import logo from "../../assets/logo.png";

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    usuario: "",
    senha: "",
    status: "",
    loading: false
  };

  checkUserExists = async (usuario, senha) => {
    const user = await api.post("login", {
      usuario,
      senha
    });

    return user;
  };

  saveUser = async (usuario, senha) => {
    await AsyncStorage.setItem("@Login:usuario", usuario);
    await AsyncStorage.setItem("@Login:senha", senha);
  };

  handleLogin = async () => {
    const { usuario, senha } = this.state;
    const { navigation } = this.props;

    var valor = 0;
    var cont = 1;
    for (cont = 1; cont <= senha.length; cont++) {
      valor = valor + senha.charCodeAt(cont - 1) * cont;
    }
    var GeraSenha = valor.toString();

    //this.setState({ senha: GeraSenha });

    this.setState({ loading: true });
    try {
      const user = await this.checkUserExists(usuario, GeraSenha);
      this.setState({ status: user.data.status });

      if (user.data.status === "C") {
        await this.saveUser(usuario, GeraSenha);
        navigation.navigate("Entrega");
      } else if (user.data.status === "E") {
        this.setState({ loading: false });
        console.log("Senha Errada");
      } else if (user.data.status === "I") {
        this.setState({ loading: false });
        console.log("Usuario Inexistente");
      }
    } catch (err) {
      console.log("Erro ao conectar a API");
    }
  };

  render() {
    const { usuario, senha, loading, status } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />

        {status === "E" ? (
          <Text style={styles.error}>A senha está errada.</Text>
        ) : (
          status === "I" && (
            <Text style={styles.error}>O usuário não existe.</Text>
          )
        )}

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          autoCapitalize="characters"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={usuario}
          onChangeText={text => this.setState({ usuario: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="characters"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={senha}
          textContentType="newPassword"
          onChangeText={text => this.setState({ senha: text })}
        />

        <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
