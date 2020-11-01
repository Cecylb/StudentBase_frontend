import {HIDE_ALERT, SHOW_ALERT} from "../actions";

const initialState = {
    alert: {
        state: false,
        error: ""
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert: {state: true, error: action.error.toString()}}
        case HIDE_ALERT:
            return {...state, alert: {state: false, error: ""}}
        default: return state
    }
}