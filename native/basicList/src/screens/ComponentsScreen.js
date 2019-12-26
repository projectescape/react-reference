import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Aniket";
  return (
    <View>
      <Text style={styles.textStyle}>Components Screen Component</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
