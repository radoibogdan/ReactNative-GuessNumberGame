import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/colors";

// Splitting files in .android.js and .ios.js will make react native chose the correct one
// Imports in other files using the component should not use .ios.js only MainButton
const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "open-sans",
    color: "white",
  },
});

export default MainButton;
