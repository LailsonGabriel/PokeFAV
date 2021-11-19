import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Buttonfavorite({ fav, favTrue, favFalse,
  setFav, favoritePokemons, setFavoritePokemons, name, current }) {
  const notify = () => toast.warn("Maximum Capacity 20 Pokemons!");

  function favoritePokemon(name) {
    const pokemonLocalStorage = JSON.parse(localStorage.getItem('favoritePokemons'));
    const pokemonExistInFav = pokemonLocalStorage.some((pokemon) => pokemon === name);
    if(pokemonExistInFav) return;
    if(pokemonLocalStorage.length === 20) return notify();
    setFav(!fav);
    const pokemonFavorite = { 
      name: current.forms[0].name,
      picture: current.sprites.front_default 
    }
    setFavoritePokemons([...favoritePokemons, pokemonFavorite]);
    localStorage.setItem('favoritePokemons', JSON
    .stringify([...pokemonLocalStorage, pokemonFavorite]));
  }

  function removePokemonFav(name) {
    setFav(!fav)
    const removePokemon = favoritePokemons.filter((pokemon) => pokemon.name !== name);
    localStorage.setItem('favoritePokemons', JSON.stringify(removePokemon));
    setFavoritePokemons(removePokemon);
  }

  return (
    <span className="button-favorite">
      <ToastContainer />
      { favoritePokemons.some((pokemon) => pokemon.name === name) ? 
          <img 
            src={ favTrue }
            alt="favorite"
            onClick={ () => removePokemonFav(name) }
          /> 
          : <img
              src={ favFalse }
              alt="favorite"
              onClick={ () => favoritePokemon(name) }
              /> 
          }
    </span>
  );
}
