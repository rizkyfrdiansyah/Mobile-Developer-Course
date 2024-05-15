import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomTextInput = ({ text, onchange, multiline = false, placeholder, numberOfLines }) => (
  <View style={styles.container}>
    <TextInput multiline={multiline} numberOfLines={numberOfLines} style={styles.input} placeholder={placeholder} onChangeText={onchange} defaultValue={text} />
  </View>
);

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});
