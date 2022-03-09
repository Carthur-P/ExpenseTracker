let initialState = []

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTransaction":
            return [
                ...state,
                {
                    ...action.payload,
                    key: action.payload.name + state.length
                }
            ]
        default:
            return state
    }
}

export default transactionReducer;