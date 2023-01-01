import { useState, useEffect } from "react";
import { createContext } from "react";
import Axios from "axios";
export const authContext = createContext();
// create context provider -> user info in multiple component
// children -> App components
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (inputs) => {
    const res = await Axios.post(
      "http://localhost:8800/api/users/login",
      inputs
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await Axios.post("http://localhost:8800/api/users/logout");
    setCurrentUser(null);
  };
  // update localstorage when user is set
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  // now our state is avaliable in all place at our apps.
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
