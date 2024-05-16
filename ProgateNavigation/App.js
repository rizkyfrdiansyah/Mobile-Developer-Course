import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Pergi ke Progate"
        onPress={() =>
          navigation.navigate("Progate", {
            name: "Ninja Ken",
            language: "React Native",
          })
        }
      />
    </View>
  );
};

const ProgateScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate {route.params.language}!</Text>
      <Text>Ayo belajar {route.params.language}!</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progate" component={ProgateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
