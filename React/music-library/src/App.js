import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div id="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>

      <footer>
        <p>&copy;MusicLibrary</p>
      </footer>
    </div>
  );
}

export default App;
