import react, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        {id: 1, name: "Cat", amount: -30},
        { id: 2, name: "Salary", amount: 100},
        { id: 3, name: "Food", amount: -50},
    ]
}

//creating transaction Reducer
const transactionReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

//creating Context
export const TransactionContext = createContext(initialState);

//creating Provider
export const TransactionProvider = (({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}) 