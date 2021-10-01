import React from 'react';
import '../css/Transaction.css'

function Transaction(props) {
    return (
        <div className="transactionContainer">
            <li className={props.transaction.amount > 0 ? 'positive' : 'negative'}>
                <p>{props.transaction.name}</p>
                <p>{props.transaction.amount > 0 ? `$${props.transaction.amount}` : `- $${Math.abs(props.transaction.amount)}`}</p>
            </li>
        </div>
    )
}

export default Transaction