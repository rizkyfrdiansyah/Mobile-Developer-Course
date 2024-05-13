import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import Home from "./screens/Home";
import AddNote from "./screens/AddNote";
import EditNote from "./screens/EditNote";

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote }) => {
  switch (currentPage) {
    case "home":
      return <Home notelist={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote />;
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note Pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  return <CurrentPageWidget currentPage={currentPage} noteList={noteList} setCurrentPage={setCurrentPage} addNote={addNote} />;
}
