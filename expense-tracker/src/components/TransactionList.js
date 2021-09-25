import React from 'react';
import Transaction from './Transaction';
import "../css/TransactionList.css"

function TransactionList(){
    return (
        <div className="transactionlistContainer">
            <h4>History</h4>
            <ul>
                <Transaction/>
                <Transaction />
                <Transaction />
            </ul>
        </div>
    )
}

export default TransactionList