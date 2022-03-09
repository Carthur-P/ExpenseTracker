import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/Balance.css'

function Balance() {
    const [balance, setBalane] = useState(0);

    const state = useSelector(state => state.transaction);

    function calculateBalance() {
        let total = 0;
        state.map(t => {
            total = total + parseInt(t.amount);
        });
        setBalane(total);
    }

    useEffect(() => {
        calculateBalance();
    }, [state])


    return (
        <div className="balanceContainer">
            <h4>YOUR BALANCE</h4>
            <p>${balance}</p>
        </div>
    )
}

export default Balance 