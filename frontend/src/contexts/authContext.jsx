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
const MY_USER = "MY_USER";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticate] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );

  var getItem = window.localStorage.getItem(MY_USER);

  if (typeof getItem !== "object") {
    getItem = JSON.parse(getItem);
  }

  const [user, setUser] = useState(getItem ?? false);
  //console.log(user);

  const login = useCallback(
    async function (values) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      var response = await loginRequest(values);
      // console.log("Antiguo response.data");
      // console.log(response.data);
      // console.log("Tipo de dato");
      // console.log(typeof response.data);
      response = {
        id: response.data.id,
        firstName: response.data.firstName,
        middleName: response.data.middleName,
        lastName: response.data.lastName,
        mobile: response.data.mobile,
        email: response.data.email,
        profile: response.data.profile,
      };
      // console.log("Nuevo response");
      // console.log(response);
      // console.log("Tipo de dato");
      // console.log(typeof response);
      window.localStorage.setItem(MY_AUTH_APP, true);
      window.localStorage.setItem(MY_USER, JSON.stringify(response));
      setIsAuthenticate(true);
      setUser(response);
      //console.log(user);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    window.localStorage.removeItem(MY_USER);
    setIsAuthenticate(false);
  }, []);

  const changeUser = useCallback(function (user) {
    console.log("user del change user");
    console.log(user);
    setUser(user);
    window.localStorage.setItem(MY_USER, JSON.stringify(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      user,
      changeUser,
    }),
    [login, logout, isAuthenticated, user, changeUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
