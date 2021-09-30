import React, {useContext} from 'react';
import { TransactionContext } from '../context/transactionState';
import Transaction from './Transaction';
import "../css/TransactionList.css"

function TransactionList(){
    const { transactions } = useContext(TransactionContext);

    return (
        <div className="transactionlistContainer">
            <h4>History</h4>
            <ul>
                {transactions.map((transaction) => {
                    return (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    );
                })}
            </ul>
        </div>
    )
}

export default TransactionList