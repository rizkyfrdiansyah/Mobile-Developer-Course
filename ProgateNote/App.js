import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "./components/customButton";
import CustomTextInput from "./components/customTextInput";
import Home from "./screens/Home";

export default function App() {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note Pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  return <Home notelist={noteList} />;
}

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 40,
//   },
// });
