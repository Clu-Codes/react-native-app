import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

import colors from "../config/colors";

function ViewLoginScreen() {
  handlePress = () => {
    console.log("Pressed!");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={styles.button}
        title="Login"
        onPress={() => handlePress()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.registerButton}
        title="Register"
        onPress={() => handlePress()}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 30,
    marginBottom: 3,
  },
  registerButton: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ViewLoginScreen;
