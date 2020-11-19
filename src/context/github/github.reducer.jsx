import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true;
            }
        case (SEARCH_USERS):
            return ({
                ...state,
                users: action.payload,
                isLoading: false
            })
        default:
            return state
    }
}