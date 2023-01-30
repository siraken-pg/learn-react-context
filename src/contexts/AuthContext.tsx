import { ReactNode, useState, createContext } from 'react';

export const AuthContextDefaultValue = {
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => {},
};

export const AuthContext = createContext(AuthContextDefaultValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
