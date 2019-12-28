import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  if (action.type === "increase_counter") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrease_counter") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase_counter" });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease_counter" });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
