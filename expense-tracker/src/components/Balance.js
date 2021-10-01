import React, {useContext} from 'react';
import '../css/Balance.css'
import { TransactionContext } from '../context/transactionState';

function Balance(){
    const { transactions } = useContext(TransactionContext);
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((prevValue, currentValue) => prevValue + currentValue).toFixed(2);

    return (
        <div className="balanceContainer">
            <h4>YOUR BALANCE</h4>
            <p>{total > 0 ? `$${total}` : `- $${Math.abs(total)}`}</p>
        </div>
    )
}

export default Balance 