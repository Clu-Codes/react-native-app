import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewLoginScreen from "./app/screens/login";

export default function App() {
  return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <ViewLoginScreen />;

  // const styles = StyleSheet.create({
  //   image: {
  //     flex: 1,
  //     justifyContent: "center",
  //   },
  // });
}
