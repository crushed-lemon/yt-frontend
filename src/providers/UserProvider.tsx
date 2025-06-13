import { useState, type ReactNode } from "react";
import type { User } from "./types";
import { UserContext } from "./UserContext";

export const UserProvider = ( {children} : {children : ReactNode} ) => {
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
