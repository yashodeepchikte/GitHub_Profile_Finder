import React, { useReducer } from "react";
import axios from 'axios';
import GithubContext from "./github.Context"
import GithubReducer from "./github.reducer"
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from "../types"

const GithubState = props => {
    const InitialState = {
        users: [],
        user: {},
        isLoading: false,
        repos: []
    }


    const [state, dispatch] = useReducer(GithubReducer, InitialState)

    // Search users
    const searchUsers = async (userHandel) => {
        // if (userHandel.length === 0) { setAlert("Please enter a user name", "info") }
        else {
    setIsLoading()
    const res = await axios.get(`https://api.github.com/search/users?q=${userHandel}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    })

    // if (res.data.items.length === 0) { setAlert("No users where found with this username", "info") }
}
    }
// Get User

//  Get Repos

// Clear user

// set loading
const setIsLoading = () => dispatch({ type: SET_LOADING })



return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers

    }}
>
    {props.children}
</GithubContext.Provider>
}

export default GithubState