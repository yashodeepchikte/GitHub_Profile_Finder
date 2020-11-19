import React, { Fragment, useState } from 'react';
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

// Imports related to context api
import GithubState from "./context/github/GithubState"

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlertState] = useState(null);
  const [repos, setRepos] = useState([]);



  const clearUsers = () => {
    setUsers([]);
    setIsLoading(false)
  }

  const clearAlert = () => {
    setAlertState(null);
    setIsLoading(false)
  }

  const setAlert = (message, type) => {
    setAlertState({ msg: message, type: type })
    setIsLoading(false)
    setTimeout(() => clearAlert(), 3000)
  }

  //  Get single user
  const getUser = async (userHandel) => {
    setIsLoading(true)
    const res = await axios.get(`https://api.github.com/users/${userHandel}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setIsLoading(false)
    setUser(res.data)
  }

  //  Get User repos
  const getUserRepos = async (userHandel) => {
    setIsLoading(true)
    const res = await axios.get(`https://api.github.com/users/${userHandel}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setIsLoading(false)
    setRepos(res.data)
  }



  return (
    <GithubState>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={props => (
            <Fragment>
              <div className="container">
                <Search clearUsers={clearUsers} users={users} />
                <Alert alert={alert} clearAlert={clearAlert} />
                <Users isLoading={isLoading} users={users} />
              </div>
            </Fragment>)}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:userHandel" render={(props) => <User {...props} getUser={getUser} user={user} isLoading={isLoading} getUserRepos={getUserRepos} repos={repos} />} />
        </Switch>
      </div>
    </GithubState>
  );

}



export default App;
