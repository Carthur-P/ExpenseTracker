import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/actions/transactionActions'
import Transaction from './Transaction';
import "../css/TransactionList.css"

function TransactionList() {
    const state = useSelector(state => state.transaction);
    const dispatch = useDispatch();
    const { deleteTransaction } = bindActionCreators(actionCreators, dispatch);

    function onDeleteClick(key) {
        deleteTransaction(key);
    }

    return (
        <div className="transactionlistContainer">
            <h4>History</h4>
            <ul>
                {state.map(t =>
                    <Transaction key={t.key} transaction={t} onClick={onDeleteClick} />
                )}
            </ul>
        </div>
    )
}

export default TransactionList