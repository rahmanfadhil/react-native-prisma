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
            <Text style={{ marginTop: 10 }}>
              Don't have account yet?{" "}
              <Text style={{ color: "#3F51B5" }}>Login</Text>
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
