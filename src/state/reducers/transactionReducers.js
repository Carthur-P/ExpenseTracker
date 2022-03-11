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
        case "deleteTansaction":
            return state.filter(s => s.key !== action.payload);
        default:
            return state
    }
}

export default transactionReducer;