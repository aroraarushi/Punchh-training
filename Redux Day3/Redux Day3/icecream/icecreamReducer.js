import { BUY_ICECREAM } from "./icecreamTypes";
import { ADD_ICECREAM } from "./icecreamTypes";

const initialState = {
    numOFIceCream: 10,
    addedIceCream:0,
}

const icecreamReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOFIceCream: state.numOFIceCream-1
        }
        case ADD_ICECREAM: return {
            ...state,
            addedIceCream: state.addedIceCream + 1
        }
        default: return state
    }
}

export default icecreamReducer;