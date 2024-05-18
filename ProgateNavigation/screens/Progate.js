import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProgateService from "./ProgateService";
import ProgateEvent from "./ProgateEvent";
import HomeIcon from "../assets/bottomTabIcons/home.png";
import ProgateIcon from "../assets/bottomTabIcons/progate.jpeg";

const Tab = createBottomTabNavigator();

const Progate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateService}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={HomeIcon} style={styles.homeIcon} />,
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEvent}
        options={{
          tabBarLabel: "Progate",
          tabBarIcon: () => <Image source={ProgateIcon} style={styles.progateIcon} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Progate;

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 40,
    height: 40,
  },
});
