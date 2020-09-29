import React from 'react';
import GlobalState from './context/GlobalState';
import Header from './components/Header/Header';
import Time from './components/Time/Time';
import Form from './components/Form/Form';
import Data from './components/Data/Data';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <GlobalState>
      <div className="container">
        <Header />
        <Time />
        <Form />
        <Data />
      </div>
    </GlobalState>
  );
}

export default App;
