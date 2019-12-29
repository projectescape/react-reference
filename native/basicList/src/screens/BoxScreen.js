import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    borderWidth: 3,
    padding: 3,
    borderColor: "red"
  }
});

export default BoxScreen;
