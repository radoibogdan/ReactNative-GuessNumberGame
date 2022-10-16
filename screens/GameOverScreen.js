import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over !</TitleText>
      <View style={styles.imageContainer}>
        {/* Local image */}
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
        {/* External image */}
        {/* <Image
          fadeDuration={2000}
          style={styles.image}
          source={{uri: 'https://media.istockphoto.com/photos/ama-dablam-mount-in-the-nepal-himalaya-picture-id485966046?k=20&m=485966046&s=612x612&w=0&h=gxP8DAYg54epuymP-eLMvh4hmlIm-AchRMwwNjzBUwE='}}
          resizeMode="cover"
        /> */}
      </View>
      <BodyText>Number of rounds : {props.roundsNumber}</BodyText>
      <BodyText>Number was : {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

// ------------------ STYLES ------------------ //
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
