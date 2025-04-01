import React, { Children, useContext, useState } from "react";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext2() {
  const { user, login, logout } = useContext(AuthContext);
  return { user, login, logout };
}

export default AuthProvider;
