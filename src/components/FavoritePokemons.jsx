import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../provider/MyProvider';
import PokemonCard from './PokemonCard';
import './principal.css';

export default function FavoritePokemons() {
  const { favoritePokemons, setFavoritePokemons } = useContext(MyContext);

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
        <button type="button" className="button">
          <Link to="/">
            Back
          </Link>
        </button>
        <div className="principal">
          { favoritePokemons.map((pokemon, index) => (
            <PokemonCard key={ index } name={ pokemon.name } url={ pokemon.url } image={ pokemon.picture } />
          )) }
        </div>
      </div>
    </div>
  );
}
