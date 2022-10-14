import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game !</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrent={false} keyboardType='number-pad' maxLength={2} />
        <View style={styles.buttonContainer}>
          {/* Buttons need to be in View to set their width */}
          <View style={styles.button}><Button title="Reset" onPress={() => {}} color={Colors.accent}/></View>
          <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primary}/></View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen : {
    flex: 1, // take all the space horizontally and vertically
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input : {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;