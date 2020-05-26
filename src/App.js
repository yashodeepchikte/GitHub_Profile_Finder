import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Switch, Route } from "react-router-dom"


import './App.css';

//  Importing components
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/alert"
import About from "./components/pages/about"
import User from "./components/users/User"

class App extends Component {
  state = {
    users: [],
    user: {},
    isLoading: false,
    alert: null,
    repos: []
  }

  searchUsers = async (userHandel) => {
    if (userHandel.length === 0) { this.setAlert("Please enter a user name", "info") }
    else {
      this.setState({
        isLoading: true,
      })
      const res = await axios.get(`https://api.github.com/search/users?q=${userHandel}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({
        isLoading: false,
        users: res.data.items
      })
      if (res.data.items.length === 0) { this.setAlert("No users where found with this username", "info") }
    }
  }

  clearUsers = () => this.setState({ users: [], isLoading: false })
  clearAlert = () => this.setState({ alert: null, isLoading: false })
  setAlert = (message, type) => {
    this.setState({ alert: { msg: message, type: type }, isLoading: false })
    setTimeout(() => this.clearAlert(), 3000)
  }

  //  Get single user
  getUser = async (userHandel) => {
    this.setState({
      isLoading: true,
    })
    const res = await axios.get(`https://api.github.com/users/${userHandel}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("user info = ", res.data)
    this.setState({
      isLoading: false,
      user: res.data
    })
  }

  //  Get User repos
  getUserRepos = async (userHandel) => {
    this.setState({ isLoading: true })
    const res = await axios.get(`https://api.github.com/users/${userHandel}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ isLoading: false, repos: res.data })
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
            <Fragment>
              <div className="container">
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} users={this.state.users} />
                <Alert alert={this.state.alert} clearAlert={this.clearAlert} />
                <Users isLoading={this.state.isLoading} users={this.state.users} />
              </div>
            </Fragment>)}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:userHandel" render={(props) => <User {...props} getUser={this.getUser} user={this.state.user} isLoading={this.state.isLoading} getUserRepos={this.getUserRepos} repos={this.state.repos} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
