import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={term => setTerm(term)}
        onTermSubmit={() => {
          console.log("Term was Submitted");
        }}
      />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
