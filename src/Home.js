import React from "react";

const Home = ({ setPage }) => (
  <div className="home-container">
    <h1>School Management</h1>
    <button onClick={() => setPage("add")}>Add School</button>
    <button onClick={() => setPage("list")}>List Schools</button>
  </div>
);

export default Home;
