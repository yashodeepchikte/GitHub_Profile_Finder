import React, { useState, useContext } from 'react'

import GithubContext from "../../context/github/github.Context"
const Search = (props) => {

    const githubContext = useContext(GithubContext)

    const { clearUsers, users } = props;
    const [userHandel, setUserHandel] = useState("");

    const handelChange = (event) => setUserHandel(event.target.value)
    const handelSubmit = (event) => {
        event.preventDefault();
        githubContext.searchUsers(userHandel)
        setUserHandel("")
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="userHandel" value={userHandel} onChange={handelChange} placeholder="User Handel" />
                <button type="submit">Search</button>
            </form>
            {users.length !== 0 ? <button onClick={clearUsers}>Clear</button> : ""}
        </div>
    )
}

export default Search
