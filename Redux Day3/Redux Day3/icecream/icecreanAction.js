import { BUY_ICECREAM } from "./icecreamTypes";
import { ADD_ICECREAM} from "./icecreamTypes"

export const buyIceCream = () => {
    return{
        type: BUY_ICECREAM
    }
}

export const addIceCream = () => {
    return {
        type: ADD_ICECREAM
    }
}