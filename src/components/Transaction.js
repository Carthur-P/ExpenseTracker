import React from 'react';
import trash from '../resources/cross.png';
import '../css/Transaction.css'

function Transaction({ transaction, onClick }) {
    return (
        <div className="transactionContainer">
            <li className={transaction.amount > 0 ? 'positive' : 'negative'}>
                <p>{transaction.name}</p>
                <div className='flexbox-row'>
                    <p>{transaction.amount > 0 ? `$${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}</p>
                    <img onClick={() => onClick(transaction.key)} src={trash} />
                </div>
            </li>
        </div>
    )
}

export default Transaction