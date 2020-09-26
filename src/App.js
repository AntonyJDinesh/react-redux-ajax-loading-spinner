import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import store from './redux/store';
import {LOADING_SPINNER_SHOW, LOADING_SPINNER_HIDE} from './redux/actionTypes';
import {doAjaxWithLoadingSpinner, doGet} from './util/ajax';

function App() {
  return (
    <div className="App">
      <Button onClick={() => {store.dispatch({type: LOADING_SPINNER_SHOW})}}>SHOW</Button>
      <Button onClick={() => {store.dispatch({type: LOADING_SPINNER_HIDE})}}>HIDE</Button>
    </div>
  );
}

export default App;
