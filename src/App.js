import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import SignIn from './components/SignIn';
import ContactsList from './components/ContactsList';

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/">
            {sessionStorage.getItem('user')
              ? <ContactsList/>
              : <Redirect to="/login"/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
