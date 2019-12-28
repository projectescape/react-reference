import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
      age: 10
      // One way of adding keys is to add a key property in the objects themselves
      // , key: "1"
    },
    { name: "Friend #2", age: 11 },
    { name: "Friend #3", age: 12 },
    { name: "Friend #4", age: 13 },
    { name: "Friend #5", age: 14 },
    { name: "Friend #6", age: 15 },
    { name: "Friend #7", age: 16 },
    { name: "Friend #8", age: 17 }
  ];
  return (
    <FlatList
      // To get a horizontal list
      // horizontal
      // To hide the horizontal scrollbar
      // showsHorizontalScrollIndicator={false}
      keyExtractor={item => {
        // This is the second method to get keys
        return item.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
