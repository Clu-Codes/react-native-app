import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // sets the main axis to be horizontal
        justifyContent: "center", // centers the content based on the main axis - horizontal
        alignItems: "center", // sets content based on the secondary axis
        flexWrap: "wrap",
        alignContent: "center", // determines the alignment of entire content - only works if you have wrapping
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // maps to width or height
          flexGrow: 1, // same as setting flex property
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
