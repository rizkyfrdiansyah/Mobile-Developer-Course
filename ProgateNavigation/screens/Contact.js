import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} />
      <TextInput placeholder="Pesan" style={styles.textInput} />

      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
