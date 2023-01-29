import {
  useCallback,
  useState,
  useMemo,
  createContext,
  useContext,
} from "react";
import PropTypes from "prop-types";
import { loginRequest } from "../api/login.api";

const MY_AUTH_APP = "MY_AUTH_APP";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticate] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const [user, setUser] = useState(null);

  const login = useCallback(async function (values) {
    const response = await loginRequest(values);
    console.log(response.data);
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticate(true);
    setUser(response.data);
    console.log(user);
  }, [user]);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticate(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      user,
    }),
    [login, logout, isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
