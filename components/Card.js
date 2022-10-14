import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  // props.style key/value pairs from parent (if they exist) will overwrite Card key/value pairs
  // props.style may contain new key/value pairs
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black", // ios specific
    shadowOffset: "width: 0, height: 2", // ios specific
    shadowRadius: 5, // ios specific
    shadowOpacity: 0.25, // ios specific
    elevation: 5, // android
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    // borderBottomLeftRadius for specific corners
  },
});

export default Card;
