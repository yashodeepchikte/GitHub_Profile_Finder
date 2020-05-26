import React, { Fragment } from "react"

const About = (props) => {
    return (
        <Fragment>
            <h1 style={{ color: "white" }}>About This app</h1>
            <p style={{ color: "white" }}>This is a react app that makes an api request for searching githuub users and then displays the found users statistics</p>
        </Fragment>
    )
}

export default About