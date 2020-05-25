import React from 'react'

const Navbar = ({ icon, title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}></i>
                {title}
            </h1>
        </div>
    )
}


Navbar.defaultProps = {
    title: " GitHub Finder",
    icon: "fab fa-github"
}

export default Navbar
