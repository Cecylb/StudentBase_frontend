export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
export const REQUEST_SEARCH_RESULT = 'REQUEST_SEARCH_RESULT'
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT'
export const REQUEST_TABLE_FIELDS = 'REQUEST_TABLE_FIELDS'
export const FETCH_TABLE_FIELDS = 'FETCH_TABLE_FIELDS'
export const ADD_NEW_ENTITY = 'ADD_NEW_ENTITY'
export const DELETE_ENTITY = 'DELETE_ENTITY'

export function showAlert(error) {
    return {
        type: SHOW_ALERT,
        error: error
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchSearchResult(id) {
    return {
        type: REQUEST_SEARCH_RESULT,
        data: {
            id: id
        }
    }
}

export function fetchTableFields() {
    return {
        type: REQUEST_TABLE_FIELDS
    }
}

export function addNewEntity(entity) {
    return {
        type: ADD_NEW_ENTITY,
        data: {
            entity: entity
        }
    }
}

export function deleteEntity(id) {
    return {
        type: DELETE_ENTITY,
        data: {
            id: id
        }
    }
}