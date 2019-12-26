import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Lul Insaan!!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "purple"
  }
});

export default HomeScreen;
