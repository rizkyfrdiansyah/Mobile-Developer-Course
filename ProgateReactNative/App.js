import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Flatlist
// const items = [
//   {
//     id: "1",
//     title: "Item Pertama",
//   },
//   {
//     id: "2",
//     title: "Item Kedua",
//   },
//   {
//     id: "3",
//     title: "Item Ketiga",
//   },
//   {
//     id: "4",
//     title: "Item Keempat",
//   },
//   {
//     id: "5",
//     title: "Item Kelima",
//   },
//   {
//     id: "6",
//     title: "Item Keenam",
//   },
//   {
//     id: "7",
//     title: "Item Ketujuh",
//   },
//   {
//     id: "8",
//     title: "Item Kedelapan",
//   },
//   {
//     id: "9",
//     title: "Item Kesembilan",
//   },
//   {
//     id: "10",
//     title: "Item Kesepuluh",
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// ScrollView
// const items = [
//   {
//     id: "1",
//     title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//   },
//   {
//     id: "2",
//     title: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
//   },
//   {
//     id: "3",
//     title: "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
//   },
//   {
//     id: "4",
//     title: "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//   },
//   {
//     id: "5",
//     title: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//   },
//   {
//     id: "6",
//     title: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
//   },
// ];

// Kasus penggunakan ScrollView diganti dengan flatlist
// const items = [
//   {
//     id: "1",
//     title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export default function App() {
  // const [name, setName] = useState();
  // const [age, setAge] = useState();
  // const [question, setQuestion] = useState();
  // const renderItem = ({ item }) => <Item title={item.title} />;
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  console.log("tekan tombol===>", onPress);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" style="light" />

      {/* View */}
      {/* <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 40 }}>Hello React Native</Text>
      </View>
      <View style={{ flexDirection: "row", height: 100 }}>
        <View style={{ backgroundColor: "blue", flex: 1 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
        <View style={{ backgroundColor: "green", flex: 1 }} />
      </View> */}

      {/* Text */}
      {/* <Text style={{ fontSize: 30 }}>
        <Text style={{ fontWeight: "bold" }}>Belajar Progate</Text>
        <Text>Saat ini aku sedang berlajar mengenai text komponen</Text>
        <View>
          <Text>Ayo belajar dengan Guru Domba</Text>
        </View>
      </Text> */}

      {/* StyleSheet */}
      {/* <View style={styles.container}>
        <Text style={styles.title}>React Native - Progate</Text>
        <Text style={styles.title}>React Native - Progate</Text>
        <Text style={styles.title}>React Native - Progate</Text>
      </View> */}

      {/* Image */}
      {/* <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/icon.png")} />
        <Image style={styles.image} source={{ uri: "https://progate.com/images/ogp/about.png" }} />
      </View> */}

      {/* TextInput */}
      {/* <View>
        <TextInput style={styles.input} placeholder="Masukan Nama" onChangeText={setName} value={name} />
        <TextInput style={styles.input} placeholder="Masukan Umur" onChangeText={setAge} value={age} keyboardType="numeric" />
        <TextInput style={styles.multiLineInput} placeholder="Masukan pertanyaan" multiline={true} numberOfLines={3} onChangeText={setQuestion} value={question} />
      </View> */}

      {/* ScrollView */}
      {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView> */}

      {/* <ScrollView>
        {items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* FlatList */}
      {/* <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} /> */}

      {/* Button */}
      <View style={styles.buttonWrapper}>
        <Button title="Default Button" onPress={() => Alert.alert("Simple Button")} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Color Button" color="#f194ff" onPress={() => Alert.alert("Color Button")} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Disabled Button" disabled onPress={() => Alert.alert("Disable Button")} />
      </View>

      {/* TouchableOpacity */}
      <Text>You Clicked {count} times</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  // title: {
  //   marginTop: 16,
  //   paddingVertical: 8,
  //   borderWidth: 4,
  //   borderColor: "#20232a",
  //   borderRadius: 6,
  //   backgroundColor: "#61dafb",
  //   color: "#20232a",
  //   textAlign: "center",
  //   fontSize: 30,
  //   fontWeight: "bold",
  // },
  // image: {
  //   width: 200,
  //   height: 200,
  // },
  // input: {
  //   height: 60,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // multiLineInput: {
  //   height: 100,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // scrollView: {
  //   backgroundColor: "gray",
  //   marginHorizontal: 20,
  // },
  // text: {
  //   fontSize: 42,
  // },
  // item: {
  //   backgroundColor: "#f9c2ff",
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  // title: {
  //   fontSize: 32,
  // },
  buttonWrapper: {
    margin: 10,
  },
  button: {
    backgroundColor: "#674f74",
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
  },
});
