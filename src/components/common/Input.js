import React from "react";
import { Text, View, TextInput } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, password }) => {
  const { inputStyle, labelStyle, contanierStyle } = styles;
  return (
    <View style={contanierStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={password}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  contanierStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
