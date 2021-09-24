import React from 'react';
import './css/App.css';
import Header from './components/Header'
import Transaction from './components/Transaction'
import Balance from './components/Balance'
import Breakdown from './components/Breakdown'

function App() {
  return (
    <div className="app">
      <Header/>
      <Balance/>
      <Breakdown/>
    </div>
  );
}

export default App;
