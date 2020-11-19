import React from 'react'
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="display pic" className="round-img" style={{ "width": "120px" }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} style={{ "color": "white", "height": "50px", "width": "200px", "border": "1px solid white" }}> More</Link>
            </div>
        </div >
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
