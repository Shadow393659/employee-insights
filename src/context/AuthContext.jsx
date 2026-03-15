import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // restore session on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    if (username === "testuser" && password === "Test123") {
      const userData = { username };

      setUser(userData);

      localStorage.setItem("authUser", JSON.stringify(userData));

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
