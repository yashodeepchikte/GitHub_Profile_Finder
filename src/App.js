import React, { Component } from 'react';
import axios from "axios";

import './App.css';

//  Importing components
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/alert"


class App extends Component {
  state = {
    users: [],
    isLoading: false,
    alert: null
  }

  searchUsers = async (userHandel) => {
    if (userHandel.length === 0) { this.setAlert("Please enter a user name", "info") }
    else {
      this.setState({
        isLoading: true,
      })
      const res = await axios.get(`https://api.github.com/search/users?q=${userHandel}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      console.log("res.data = ", res.data)
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



  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} users={this.state.users} />
          <Alert alert={this.state.alert} clearAlert={this.clearAlert} />
          <Users isLoading={this.state.isLoading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

export default App;
