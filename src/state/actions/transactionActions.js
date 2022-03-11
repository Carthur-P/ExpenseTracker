export const addTransaction = (transaction) => {
    return {
        type: "addTransaction",
        payload: transaction
    }
}

export const deleteTransaction = (key) => {
    return {
        type: "deleteTansaction",
        payload: key
    }
}