import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  };

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        <LoginForm />
      </View>
    );
  }
}
