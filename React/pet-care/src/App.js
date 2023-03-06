import { Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>

      <footer>Pet Care 2022&copy;</footer>
    </div>
  );
}

export default App;
