import React from 'react';

function Transaction(props){
    return (
        <li id={props.id}>
            <p>{props.name}</p>
            <p>$0.00</p>
        </li>
    )
}

export default Transaction