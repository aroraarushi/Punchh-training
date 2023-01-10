import { INCREASE_COUNTER } from "./actionTypes";
import { DECREASE_COUNTER} from "./actionTypes";

export const increaseCounter = () => {
    return{
        type: INCREASE_COUNTER
    }
}

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER
    }
}