import React, { useReducer } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/colorCounter";

const COLOR_INC = 15;

const reducer = (state, action) => {
  if (action.type === "change_red") {
    if (state.red + action.payload > 255 || state.red + action.payload < 0)
      return state;
    return { ...state, red: state.red + action.payload };
  }
  if (action.type === "change_green") {
    if (state.green + action.payload > 255 || state.green + action.payload < 0)
      return state;
    return { ...state, green: state.green + action.payload };
  }
  if (action.type === "change_blue") {
    if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
      return state;
    return { ...state, blue: state.blue + action.payload };
  }
  return state;
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INC });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INC });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INC });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INC });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INC });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INC });
        }}
      />
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
