import React, { Component } from "react";
import { Text } from "react-native";
import { Input } from "./common/Input";
import { Button, Card, CardSection } from "./common";
import firebase from "firebase";
import Spinner from "./common/Spinner";
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(() => {
        this.onLoginFail();
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.onLoginSuccess();
          })
          .catch(() => {
            this.onLoginFail();
          });
      });
  };

  onLoginSuccess() {
    this.setState({ error: "", loading: false, email: "", password: "" });
  }
  onLoginFail() {
    this.setState({ error: "Authentication Failed", loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    } else {
      return <Button onPress={this.onButtonPress}>Log In</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            password
          />
        </CardSection>
        <Text style={style.errorStyleText}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const style = {
  errorStyleText: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};
