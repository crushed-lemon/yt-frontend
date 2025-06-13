
export interface User {
  username : string
}

export interface UserContextType {
  user : User | null,
  login : (username : string) => void,
  logout : () => void
}
