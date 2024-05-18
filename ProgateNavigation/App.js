import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import HomeIcon from "./assets/bottomTabIcons/home.png";
import ProgateIcon from "./assets/bottomTabIcons/progate.jpeg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Progate from "./screens/Progate";
import Contact from "./screens/Contact";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.marginBottom20}>Home Screen</Text>
//       <Button title="Pergi ke Progate" style={styles.button} onPress={() => navigation.navigate("Progate")} />
//     </View>
//   );
// };

// const ProgateScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Progate</Text>
//       <Text style={styles.marginBottom20}>Ayo belajar!</Text>
//       <Button title="Kembali" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         tabBarLabel: "Home",
    //         tabBarIcon: () => <Image source={HomeIcon} style={styles.homeIcon} />,
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Progate"
    //       component={ProgateScreen}
    //       options={{
    //         tabBarLabel: "Progate",
    //         tabBarIcon: () => <Image source={ProgateIcon} style={styles.progateIcon} />,
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Progate" component={ProgateScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Progate" component={Progate} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom20: {
    marginBottom: 20,
  },
  // homeIcon: {
  //   width: 20,
  //   height: 20,
  // },
  // progateIcon: {
  //   width: 40,
  //   height: 40,
  // },
});
