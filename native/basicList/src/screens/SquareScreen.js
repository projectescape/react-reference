import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/colorCounter";

const COLOR_INC = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(127);
  const [green, setGreen] = useState(127);
  const [blue, setBlue] = useState(127);

  const setColor = (color, change) => {
    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      }
      return setRed(red + change);
    }
    if (color === "green") {
      if (green + change > 255 || green + change < 0) {
        return;
      }
      return setGreen(green + change);
    }
    if (color === "blue") {
      if (blue + change > 255 || blue + change < 0) {
        return;
      }
      return setBlue(blue + change);
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          setColor("red", COLOR_INC);
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INC);
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor("green", COLOR_INC);
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_INC);
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor("blue", COLOR_INC);
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INC);
        }}
      />
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
