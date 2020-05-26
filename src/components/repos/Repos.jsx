import React from 'react'
import RepoItem from "./RepoItem"

export const Repos = ({ repos }) => {
    return (
        <div>
            <h1>Repositories</h1>
            <div style={{ border: "1px solid white", display: "flex", "flexWrap": "wrap" }}>
                {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
            </div>
        </div>
    )
}

export default Repos
