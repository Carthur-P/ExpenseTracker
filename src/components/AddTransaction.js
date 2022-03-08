import React from 'react';
import '../css/AddTransaction.css'

function AddTransaction() {
    return (
        <div >
            <form className="addtransactionContainer">
                <h4>Add new transaction</h4>
                <label>Transaction Name:</label>
                <input type="text"></input>
                <label>Amount:</label>
                <input type="text"></input>
                <br/>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction