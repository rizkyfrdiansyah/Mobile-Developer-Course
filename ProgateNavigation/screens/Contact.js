import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";

const Contact = ({ navigation }) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleNameChange = (text) => {
    setIsFormFilled(text !== "");
  };

  const handlePesanChange = (text) => {
    setIsFormFilled(text !== "");
  };

  useEffect(() => {
    const beforeRemoveHandler = (event) => {
      if (!isFormFilled) {
        return;
      }
      showConfirmationDialog(event);
      return false;
    };

    navigation.addListener("beforeRemove", beforeRemoveHandler);

    return () => {
      navigation.removeListener("beforeRemove", beforeRemoveHandler);
    };
  }, [isFormFilled, navigation]);

  const showConfirmationDialog = (event) => {
    event.preventDefault();
    Alert.alert(
      "Konfirmasi",
      "Anda telah menuliskan sesuatu dalam formulir. Apakah Anda ingin tetap di sini ?",
      [
        { text: "Tetap di Sini", onPress: () => {} },
        { text: "Lanjutkan Pergi", onPress: () => navigation.dispatch(event.data.action) },
      ],
      { cancelable: true }
    );
  };

  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (event) => {
  //     event.preventDefault();
  //     alert("Are you sure?");
  //   });
  // });
  // useEffect(() => {
  //   alert("Contact screen is mounted");
  //   return () => {
  //     alert("Contact screen is unmounted");
  //   };
  // });
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} onChange={handleNameChange} />
      <TextInput placeholder="Pesan" style={styles.textInput} onChange={handlePesanChange} />

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
