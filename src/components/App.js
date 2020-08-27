import React from "react";
import PostList from "./PostList";
import VisibilityFilter from "./VisibilityFilter";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container">
      <header className="primary-header">
        <h2 style={{ textAlign: 'center', color: 'red' }}>Blog demo with ReactJS</h2>
      </header>
      <Router>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </aside>
        <main>
          <Switch>
            <Route path="/posts">
              <VisibilityFilter />
              <PostList />
            </Route>
            <Route path="/">
                <h1>Home page</h1>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
