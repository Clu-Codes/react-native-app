import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
  View,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log("useDimensions ===>", useDimensions());
  console.log("use Dimensions.get ===>", Dimensions.get("screen"));
  console.log("app executed");
  console.log(require("./assets/icon.png"));
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
        // <Button
        //   color="orange"
        //   title="Click me"
        //   onPress={() =>
        //     Alert.prompt("My title", "My message", (text) => console.log(text))
        //   }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// Options within an alert

{
  /* <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <TouchableNativeFeedback onPress={() => console.log('image tapped')}>
      <View style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" /> */
}

{
  /* <Image 
        blurRadius={1}
        fadeDuration={1000}
        source={{ 
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'
        }}
      /> */
}
