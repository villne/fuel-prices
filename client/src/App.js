import React from "react";
import TablePrices from "./components/Table/TablePrices";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import ToggleButtons from "./components/ToggleButtons/ToggleButtons";
import { Router, Route, Link } from "react-router";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <SideBar />
      <ToggleButtons />
      <TablePrices />
    </div>
  );
}

export default App;
