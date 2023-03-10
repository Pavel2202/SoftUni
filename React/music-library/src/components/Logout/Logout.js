import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Logout = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    authService.logout(user.accessToken).then(() => {
      logout();
      navigate("/dashboard");
    });
  }, []);

  return null;
};

export default Logout;
