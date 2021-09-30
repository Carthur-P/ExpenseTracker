import react, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        {id: 1, text: "Cat", amount: -30},
        {id: 2, text: "Salary", amount: 100},
        {id: 3, text: "Food", amount: -50},
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
export const TransactionProvide = (({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}) 