import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/actions/transactionActions'
import '../css/AddTransaction.css'

function AddTransaction() {
    const [transaction, setTransaction] = useState({
        name: "",
        amount: 0
    });

    const dispatch = useDispatch();
    const { addTransaction } = bindActionCreators(actionCreators, dispatch);

    function onChange(e) {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        addTransaction(transaction);
        setTransaction({
            name: "",
            amount: 0
        });
    }

    return (
        <div className="addtransactionContainer">
            <h4>Add new transaction</h4>
            <label>Transaction Name:</label>
            <input name="name" type="text" value={transaction.name} onChange={e => onChange(e)} />
            <label>Amount:</label>
            <input name="amount" type="number" value={transaction.amount} onChange={e => onChange(e)} />
            <br />
            <button onClick={e => onSubmit(e)}>Add Transaction</button>
        </div>
    )
}

export default AddTransaction