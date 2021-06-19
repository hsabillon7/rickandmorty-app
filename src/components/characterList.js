import React from "react";
import { StyleSheet, View } from "react-native";
import Character from "./character";

const CharacterList = ({ characters }) => {
  return (
    <View style={styles.container}>
      {characters.results.map((characterInfo, index) => (
        <Character key={index} characterInfo={characterInfo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default CharacterList;
