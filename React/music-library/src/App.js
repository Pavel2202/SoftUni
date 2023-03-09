import { Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div id="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>

      <footer>
        <p>&copy;MusicLibrary</p>
      </footer>
    </div>
  );
}

export default App;
