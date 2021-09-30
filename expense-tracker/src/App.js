import React from 'react';
import './css/App.css';
import Header from './components/Header'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import Breakdown from './components/Breakdown'
import AddTransaction from './components/AddTransaction'
import { TransactionProvider } from './context/transactionState';

function App() {
  return (
    <TransactionProvider>
      <div className="app">
        <div className="container">
          <Header />
          <Balance />
          <Breakdown />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
