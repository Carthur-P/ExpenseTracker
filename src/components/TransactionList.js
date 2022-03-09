import React from 'react';
import { useSelector } from 'react-redux';
import Transaction from './Transaction';
import "../css/TransactionList.css"

function TransactionList() {
    const state = useSelector(state => state.transaction);

    return (
        <div className="transactionlistContainer">
            <h4>History</h4>
            <ul>
                {state.map(t =>
                    <li key={t.key}>
                        <Transaction transaction={t} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TransactionList