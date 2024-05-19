import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

const ProgateEvent = ({ navigation }) => {
  // useFocusEffect(() => {
  //   alert("Screen was focused");
  //   return () => {
  //     alert("Screen was unfocused");
  //   };
  // });
  // useEffect(() => {
  //   navigation.addListener("state", () => alert("navigation state changed"));
  //   // navigation.addListener("focus", () => alert("ProgateEvent screen is focused"));
  //   // navigation.addListener("blur", () => alert("ProgateEvent screen is unfocused"));
  // });
  useEffect(() => {
    navigation.addListener("state", (event) => console.log(event.data.state));
  });
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Progate Event</Text>
      <Text>Join Progate Event to learn coding!</Text>
    </View>
  );
};

export default ProgateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});
