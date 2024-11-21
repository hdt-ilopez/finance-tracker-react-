export interface UserProps {
  id: string;
  email: string;
}

export interface AuthState {
  user: UserProps | undefined;
  setUser: (user: UserProps | undefined) => void;
}
