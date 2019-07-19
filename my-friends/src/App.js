import React from 'react';
import {
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"

import "./App.css"

function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      <nav className="nav">
        <Link to="/" className="link">Login</Link>
      </nav>
      <Route 
        exact path="/" 
        component={Login}
      />
      <PrivateRoute exact path='/friendsList' component={FriendsList} />
    </div>
  );
}

export default App;
