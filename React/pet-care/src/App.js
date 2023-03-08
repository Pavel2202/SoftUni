import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import Logout from "./components/Logout/Logout";
import Error from "./components/Error/Error";
import GuardedRoute from "./components/Common/GuardedRoute";
import { NotificationProvider } from "./contexts/NotificationContext";
import Notification from "./components/Common/Notification";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div id="container">
          <Header />

          <Notification />

          <main id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/details/:petId" element={<Details />} />
              <Route element={<GuardedRoute />}>
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:petId" element={<Edit />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

          <footer>Pet Care 2022&copy;</footer>
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
