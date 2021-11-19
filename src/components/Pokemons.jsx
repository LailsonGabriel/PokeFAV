import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../provider/MyProvider';
import requestAPI from '../util/requestAPI';
import './principal.css';

export default function Pokemons() {
  const { setDataAPI } = useContext(MyContext);

  useEffect(() => {
    async function fetchPokemons() {
      const result = await requestAPI('https://pokeapi.co/api/v2/pokemon');
      setDataAPI(result);
    }
    fetchPokemons();
  }, [setDataAPI])

  return (
    <div>
      <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" alt="pokemon-logo" class="pokemon-logo" />
      <Link to="/favorites" class="favorite-btn">
        See your favorites
      </Link>
    </div>
  );
}
