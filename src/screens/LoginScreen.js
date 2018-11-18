import React, { Component } from "react";
import { Constants } from "expo";
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

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
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
                <Icon name="mail" />
                <Input placeholder="Email" />
              </Item>
            </Form>
            <Button full>
              <Text>Login</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
