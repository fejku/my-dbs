import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManageDB from "./ManageDB";

function App(props) {
  return (
    <div className="container">
      <Router>
        <div className="row">
          <div className="col">
            <Link to="/">Home</Link>
          </div>
          <div className="col">
            <Link to="/manage-db">MyDBs</Link>
          </div>
        </div>

        <Switch>
          <Route path="/manage-db"><ManageDB /></Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;