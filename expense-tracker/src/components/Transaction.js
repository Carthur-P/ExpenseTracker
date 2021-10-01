import React from 'react';
import '../css/Transaction.css'

function Transaction(props) {
    return (
        <div className="transactionContainer">
            <li className={props.transaction.amount > 0 ? 'positive' : 'negative'}>
                <p>{props.transaction.name}</p>
                <p className="currency">{props.transaction.amount}</p>
            </li>
        </div>
    )
}

export default Transaction