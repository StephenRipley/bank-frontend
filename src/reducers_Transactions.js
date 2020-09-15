import{ RETURN_CURRENT_TRANSACTIONS } from "./actions"

const initalState = {
    transactions: {}
}

export const transactions = (state = initalState, action) =>{
    const { type, payload} = action;

    switch(type) {
        case RETURN_CURRENT_TRANSACTIONS: {
            const { currentTransactions } = payload;
            return{
                ...state,
                transactions: currentTransactions
            }
        }
        default:
            return state;
    }
}