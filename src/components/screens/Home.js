import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchCharacters } from "../../api";
import CharacterList from "../characterList";

const Home = () => {
  const [characters, setCharacters] = useState({});

  const getCharacterList = async () => {
    const response = await fetchCharacters();

    setCharacters(response);
  };

  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <>{characters.info ? <CharacterList characters={characters} /> : null}</>
  );
};

export default Home;
