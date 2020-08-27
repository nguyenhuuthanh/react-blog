import React from "react";
import PostList from "./PostList";
import VisibilityFilter from "./VisibilityFilter";

const App = () => {
  return (
    <div className="ui container">
      <h2 style={{ textAlign: 'center', color: 'red' }}>Blog demo with ReactJS</h2>
      <VisibilityFilter />
      <PostList />
    </div>
  );
};

export default App;
