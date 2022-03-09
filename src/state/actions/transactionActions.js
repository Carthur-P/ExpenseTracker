export const addTransaction = (transaction) => {
    return {
        type: "addTransaction",
        payload: transaction
    }
}