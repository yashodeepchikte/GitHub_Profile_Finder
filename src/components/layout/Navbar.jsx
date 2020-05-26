import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ icon, title }) => {
    return (
        <div className="navbar bg-primary">
            <div>
                <h1>
                    <i className={icon}></i>
                    {title}
                </h1>
            </div>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}


Navbar.defaultProps = {
    title: " GitHub Finder",
    icon: "fab fa-github"
}

export default Navbar
