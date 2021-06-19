import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Character = ({ characterInfo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBio}>
        <Text>{characterInfo.name}</Text>
        <Text>{characterInfo.species}</Text>
        <Text>{characterInfo.gender}</Text>
        <Text>{characterInfo.location.name}</Text>
      </View>
      <View style={styles.cardImage}>
        <Image style={styles.image} source={{ uri: characterInfo.image }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    width: "100%",
  },
  cardBio: { flex: 1 },
  cardImage: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Character;
