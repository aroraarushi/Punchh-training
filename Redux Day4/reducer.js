import { INCREASE_COUNTER } from "./actionTypes";
import { DECREASE_COUNTER} from "./actionTypes";

const initialState = {
    counter: 0
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case INCREASE_COUNTER : return {
            counter: state.counter+1
        }
        case DECREASE_COUNTER: return {
           counter: state.counter - 1
        }
        default: return state
    }
}

export default reducer;