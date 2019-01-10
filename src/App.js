import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button } from "./components/common";
import LoginForm from "./components/LoginForm";
import Spinner from "./components/common/Spinner";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentDidMount = () => {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyA6GJ_cN-SN8FxN0fkQF1C8E7Hv75ZrKLk",
      authDomain: "auth-def1b.firebaseapp.com",
      databaseURL: "https://auth-def1b.firebaseio.com",
      projectId: "auth-def1b",
      storageBucket: "auth-def1b.appspot.com",
      messagingSenderId: "500840867307"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        {this.renderContent()}
      </View>
    );
  }
}
