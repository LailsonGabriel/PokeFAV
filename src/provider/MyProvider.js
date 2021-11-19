import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const Provider = ({ children }) => {
  const [dataAPI, setDataAPI] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const values = { 
    dataAPI,
    setDataAPI,
    currentPokemon,
    setCurrentPokemon,
    favoritePokemons,
    setFavoritePokemons,
  };

  return (
    <MyContext.Provider value={values}>
      { children }
    </MyContext.Provider>
  );
}