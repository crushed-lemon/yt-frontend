import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  username : string
}

interface UserContextType {
  user : User | null,
  login : (username : string) => void,
  logout : () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ( {children} : {children : ReactNode} ) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username : string) => {
    setUser({username});
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  );

}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;