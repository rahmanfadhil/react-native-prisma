// @flow

import React, { Component } from "react";
import { Font, AppLoading } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends Component<{}, { loading: boolean }> {
  state = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <AppLoading />;
    return <LandingPage />;
  }
}

const LandingPage = createAppContainer(
  createStackNavigator({
    Home: { screen: RegisterScreen },
    Login: { screen: LoginScreen }
  })
);
