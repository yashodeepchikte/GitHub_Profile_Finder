import React, { Component } from 'react'

export class Search extends Component {

    state = {
        userHandel: ""
    }

    handelChange = (event) => this.setState({ [event.target.name]: event.target.value })
    handelSubmit = (event) => {
        event.preventDefault();
        this.props.searchUsers(this.state.userHandel)
        this.setState({ userHandel: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" name="userHandel" value={this.state.userHandel} onChange={this.handelChange} placeholder="User Handel" />
                    <button type="submit">Search</button>
                </form>
                {this.props.users.length !== 0 ? <button onClick={this.props.clearUsers}>Clear</button> : ""}
            </div>
        )
    }
}

export default Search
