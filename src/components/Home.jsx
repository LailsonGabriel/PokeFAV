import React, { useContext, useEffect } from 'react';
import { MyContext } from '../provider/MyProvider';
import NextAndPrevious from './NextAndPrevious';
import PokemonCard from './PokemonCard';
import Pokemons from './Pokemons';
import './principal.css';

export default function Home() {
  const { dataAPI, setFavoritePokemons } = useContext(MyContext);

  useEffect(() => {
    if(localStorage.getItem('favoritePokemons') === null) {
      localStorage.setItem('favoritePokemons', '[]');
      return;
    }
    setFavoritePokemons(JSON.parse(localStorage.getItem('favoritePokemons')))
  }, [setFavoritePokemons]);

  return (
    <div className="app">
      <div className="all-pokemons">
        <Pokemons />
        <div className="principal">
          { dataAPI.results && dataAPI.results.map((pokemon, index) => (
            <PokemonCard key={ index } name={ pokemon.name } url={ pokemon.url } />
          )) }
        </div>
        <NextAndPrevious />
      </div>
    </div>
  );
}
