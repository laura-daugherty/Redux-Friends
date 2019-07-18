import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Profile from "./components/Profile";

import "./App.css"

function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Route 
        exact path="/" 
        component={Login} 
      />
      <Route 
        exact path="/profile"
        render={Profile}
      />
      <h1>This is an App</h1>
    </div>
  );
}

export default App;
