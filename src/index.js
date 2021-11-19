import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router';
import Home from './components/Home';
import { Provider } from './provider/MyProvider';
import FavoritePokemons from './components/FavoritePokemons';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/favorites" element={ <FavoritePokemons /> }/>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
