import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";

function App() {
  return (
    <div id="container">
      <Header />

      <main id="content">
        <Home />
        <Login />
        <Register />
        <Dashboard />
        <Create />
        <Edit />
        <Details />
      </main>
      <footer>Pet Care 2022©</footer>
    </div>
  );
}

export default App;
