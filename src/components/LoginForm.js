import React, { Component } from "react";
import { Input } from "./common/Input";
import { Button, Card, CardSection } from "./common";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
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

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}
