import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import '../css/Breakdown.css';

function Breakdown() {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);

  const state = useSelector(state => state.transaction);

  function calculateBreakdown() {
    let pTotal = 0
    let nTotal = 0
    state.map((t) => {
      t.amount >= 0 ?
        pTotal = pTotal + parseInt(t.amount) :
        nTotal = nTotal + parseInt(t.amount)
    });
    setPositive(pTotal);
    setNegative(Math.abs(nTotal));
  }

  useEffect(() => {
    calculateBreakdown();
  }, [state]);

  return (
    <div className="breakdownContainer">
      <div>
        <h5>INCOME</h5>
        <p>+${positive}</p>
      </div>
      <div>
        <h5>EXPENSE</h5>
        <p>-${negative}</p>
      </div>
    </div>
  );
}

export default Breakdown;
