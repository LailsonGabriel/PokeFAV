import React, { useContext, useEffect, useState } from 'react';
import requestAPI from '../util/requestAPI';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import { customStyles } from '../util/styles';
import PokemonInfoModal from './PokemonInfoModal';
import { MyContext } from '../provider/MyProvider';
import './principal.css';

export default function PokemonCard({name, url, image}) {
  const { setCurrentPokemon } = useContext(MyContext);
  const [picture, setPicture] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentPokemon([]);
  }

  useEffect(() => {
    async function getPokemon() {
      const result = await requestAPI(url);
      setPicture(result.sprites.front_default);
    }
    getPokemon();
  }, [url]);

  async function getPokemon(pokemonName) {
    const result = await 
      requestAPI(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setCurrentPokemon(result);
  }

  return (
    <div className="card cards">
      <div onClick={ () => {
        openModal();
        getPokemon(name);
      } }>
        { image ? <img src={ image } alt="pokemon-phot" /> :  <img src={ picture } alt="pokemon-phot" /> }
        <p>{ name }</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <GrClose className="fechar" onClick={ closeModal } />
        <PokemonInfoModal />
      </Modal>
    </div>
  );
}
