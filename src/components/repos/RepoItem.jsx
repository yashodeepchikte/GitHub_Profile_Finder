import React from 'react'

export const RepoItem = ({ repo }) => {
    return (
        <div style={{ border: "1px solid white", width: "50%", padding: "50px" }}>
            <h3 >
                <a href={repo.html_url} style={{ color: "White", margin: "auto" }}>{repo.name}</a>
            </h3>
        </div>
    )
}

export default RepoItem