import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProgateService = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Welcome to Progate!</Text>
      <Text>Progate is an online platform where you can learn coding.</Text>
    </View>
  );
};

export default ProgateService;

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
