import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Text screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default StartGameScreen;