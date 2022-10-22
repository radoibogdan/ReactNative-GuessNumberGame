import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,    //  => 3.33% screen height
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 10,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20 ,
    textAlign: "center"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
