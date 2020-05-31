import { INCREMENT, DECREMENT } from '../ActionTypes'

export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

