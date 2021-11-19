import React, { useContext, useState } from 'react';
import { MyContext } from '../provider/MyProvider';
import favTrue from '../icon/favTrue.png';
import favFalse from '../icon/favFalse.png';
import Buttonfavorite from './Buttonfavorite';

export default function PokemonInfoModal() {
  const { currentPokemon, favoritePokemons, setFavoritePokemons } = useContext(MyContext);
  const [fav, setFav] = useState(false);

  return (
    currentPokemon.name ? <div className="info-modal">
    <h1>{ currentPokemon.name }</h1>
    <Buttonfavorite
      favTrue={ favTrue }
      favFalse={ favFalse }
      fav={ fav }
      setFav={ setFav }
      favoritePokemons={ favoritePokemons }
      setFavoritePokemons={ setFavoritePokemons }
      name={ currentPokemon.name }
      current={ currentPokemon }
    />
    <img
      src={ currentPokemon && currentPokemon.sprites.other.home.front_default }
      alt="pokemon"
    />
    <red />
    <h3>Type</h3>
    <p>{ currentPokemon.types[0].type.name }</p>
    <h3>Abilities</h3>
    { currentPokemon.abilities.map(({ ability : { name }}) => (
      <p>{ name }</p>
    )) }
  </div> : <p>loading...</p>
  );
}
