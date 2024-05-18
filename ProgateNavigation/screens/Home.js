import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate("Progate");
        }}
      />
      <Text style={styles.marginVertical20}>atau</Text>
      <Button title="Hubungi Kami" onPress={() => navigation.navigate("Contact")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginVertical20: {
    marginVertical: 20,
  },
});
