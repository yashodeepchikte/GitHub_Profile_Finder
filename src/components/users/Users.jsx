import React, { Component } from 'react'


// importing Components
import UserItem from "./UseerItems"

export class Users extends Component {
    state = {
        users: [
            {
                id: "id",
                login: "Mojombo",
                avatar_Url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://hithub.com/mojombo"
            },
            {
                id: 2,
                "login": "octocat",
                "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                "html_url": "https://github.com/octocat",
            },
            {
                id: 3,
                "login": "octocat",
                "avatar_url": "https://github.com/images/error/octocat_happy.gif",
                "html_url": "https://github.com/octocat",
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => {
                    return (
                        <UserItem key={user.id} user={user} />
                    )
                })}
            </div>
        )
    }
}
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"

}

export default Users
