import React from 'react';
import '../css/Transaction.css'

function Transaction({ transaction, onClick }) {
    return (
        <div className="transactionContainer">
            <li className={transaction.amount > 0 ? 'positive' : 'negative'}>
                <p>{transaction.name}</p>
                <div>
                    <p>{transaction.amount > 0 ? `$${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}</p>
                    <button onClick={() => onClick(transaction.key)}>Delete</button>
                </div>
            </li>
        </div>
    )
}

export default Transaction