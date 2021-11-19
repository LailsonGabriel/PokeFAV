import React, { useContext } from 'react';
import { MyContext } from '../provider/MyProvider';
import requestAPI from '../util/requestAPI';
import './principal.css';


export default function NextAndPrevious() {
  const { dataAPI, setDataAPI } = useContext(MyContext);

  async function nextPage(condition) {
    const result = await 
    requestAPI(condition === 'next' ? dataAPI.next : dataAPI.previous);
    setDataAPI(result);
  }

  return (
    <div>
      <button
        type="button"
        className="button"
        disabled={ dataAPI.previous === null && true }
        onClick={ () => nextPage('previous') }
      >
        <p>previous</p>
      </button>
      <button
        type="button"
        className="button"
        onClick={ () => nextPage('next') }
      >
        <p>Next</p>
      </button>
    </div>
  );
}
