import React, { Component } from "react";
import { Font, AppLoading, Constants } from "expo";
import {
  Container,
  Content,
  Button,
  Text,
  Icon,
  Input,
  Form,
  Item,
  View
} from "native-base";

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

    return (
      <Container
        style={{
          marginTop: Constants.statusBarHeight
        }}
      >
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ width: 300 }}>
            <Form style={{ marginBottom: 20 }}>
              <Item last>
                <Icon name="person" />
                <Input placeholder="Name" />
              </Item>
              <Item last>
                <Icon name="mail" />
                <Input placeholder="Email" />
              </Item>
            </Form>
            <Button full>
              <Text>Register</Text>
              <Icon name="arrow-forward" />
            </Button>
            <Text style={{ marginTop: 10 }}>
              Already have an account?{" "}
              <Text style={{ color: "#3F51B5" }}>Login</Text>
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
