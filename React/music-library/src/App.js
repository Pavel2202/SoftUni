import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <AuthProvider>
      <div id="container">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/details/:musicId" element={<Details />}></Route>
            <Route path="/edit/:musicId" element={<Edit />}></Route>
          </Routes>
        </main>

        <footer>
          <p>&copy;MusicLibrary</p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
