import React from 'react';

function Transaction(props){
    return (
        <li>
            <p>{props.name}</p>
            <p>$0.00</p>
        </li>
    )
}

export default Transaction