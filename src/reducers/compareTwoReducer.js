const initialState = {}

export default function compareTwoReducer(state=initialState,action){
    if(action.type === 'currency/loadAllCurrency/fulfilled'){
        return {...state,...action.payload};
    }

    return state;
} 