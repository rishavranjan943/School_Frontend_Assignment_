import React, { useState } from "react";
import Home from "./Home";
import AddSchool from "./AddSchool";
import ListSchools from "./ListSchools";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home setPage={setPage} />}
      {page === "add" && <AddSchool setPage={setPage} />}
      {page === "list" && <ListSchools setPage={setPage} />}
    </div>
  );
};

export default App;
