import React from 'react'


// importing Components
import UserItem from "./UseerItems"
import Loading from "../layout/Loading"


const Users = ({ users, isLoading }) => {
    if (isLoading) {
        return <Loading />
    } else {
        return (
            <div style={userStyle} className="users">
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        )
    }
}
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "1rem"

}

export default Users
