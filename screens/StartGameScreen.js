import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard, // Native api
  Alert, // Native api
} from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (textInput) => {
    // replace non numeric values with empty string
    setEnteredValue(textInput.replace(/[^0-9]/g, ""));
  };

  const iosCloseKeyboardHandler = () => {
    Keyboard.dismiss(); // for IOS, close keyboard when you touch somewhere else
  };

  const resetInputdHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputdHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number must be between 0 and 99.", [
        { text: "OK", style: "destructive", onPress: resetInputdHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss(); // ios
  };

  // Validation
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    // TouchableWithoutFeedback - Register a touch listener without giving any visual feedback
    <TouchableWithoutFeedback onPress={iosCloseKeyboardHandler}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a new Game !</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            onChangeText={numberInputHandler}
            value={enteredValue}
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrent={false}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            {/* Buttons need to be in View to set their width */}
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputdHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputdHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // take all the space horizontally and vertically
    padding: 10,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
