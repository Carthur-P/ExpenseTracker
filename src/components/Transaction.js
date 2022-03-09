import React from 'react';
import '../css/Transaction.css'

function Transaction({ transaction }) {
    return (
        <div className="transactionContainer">
            <li className={transaction.amount > 0 ? 'positive' : 'negative'}>
                <p>{transaction.name}</p>
                <p>{transaction.amount > 0 ? `$${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}</p>
            </li>
        </div>
    )
}

export default Transaction