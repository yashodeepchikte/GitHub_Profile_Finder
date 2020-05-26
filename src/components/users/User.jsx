import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"

import Loading from "../layout/Loading"
import Repos from "../repos/Repos"

export class User extends Component {

    async componentDidMount() {
        console.log("this.params =", this.props.match.params)
        await this.props.getUser(this.props.match.params.userHandel)
        await this.props.getUserRepos(this.props.match.params.userHandel)
        console.log("this.props.user=", this.props.user)
        console.log("the repos = ", this.props.repos)
    }

    render() {

        const { name, avatar_url, location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user
        const { isLoading } = this.props;

        if (isLoading) {
            return <Loading />
        }
        else {
            return (
                <div style={{ "color": "white", "width": "75%", "margin": "10% auto" }}>
                    <h4><Link to="/" style={{ "color": "white", "border": "1px solid white" }}>Back to search</Link></h4>
                Hierable: { hireable ? <i className="fas fa-check"></i> : <i>X</i>}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} className="round-img" alt="" style={{ "width": "120px" }} />
                            <h1>{name}</h1>
                            <p>{location}</p>
                        </div>
                        <div>
                            <a href={html_url} style={{ "color": "white", "border": "1px solid white", padding: "2px", "marginBottom": "1000px" }}> Visit github profile</a><br />
                            {
                                bio && (
                                    <Fragment>
                                        {bio}
                                    </Fragment>
                                )
                            }

                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username : </strong>{login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        <strong>Blog : </strong>{blog}
                                    </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong>company : </strong>{company}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-danger">Public Repos: {public_repos}</div>
                        <div className="badge badge-light">Public Gists: {public_gists}</div>
                    </div>
                    <div>
                        <Repos repos={this.props.repos} />
                    </div>
                </div>
            )
        }
    }
}

export default User
