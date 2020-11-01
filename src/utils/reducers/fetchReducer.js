import {FETCH_SEARCH_RESULT, FETCH_TABLE_FIELDS} from "../actions";

const initialState = {
    result: [],
    fields: []
}


export const fetchReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_RESULT :
            return {...state, result: action.payload}
        case FETCH_TABLE_FIELDS :
            return {...state, fields: action.payload}
        default : return state;
    }
}