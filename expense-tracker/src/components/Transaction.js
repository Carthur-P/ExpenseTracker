import React from 'react';

function Transaction(props){
    return (
        <li>
            <p>{props.transaction.name}</p>
            <p>{props.transaction.amount}</p>
        </li>
    )
}

export default Transaction