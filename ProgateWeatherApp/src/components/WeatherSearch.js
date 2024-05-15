import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "./CustomTextInput";

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  return (
    <View>
      <CustomTextInput placeholder="Search the weather of your city" numberOfLines={1} text={location} onchange={setLocation} />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});
