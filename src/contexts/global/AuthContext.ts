import { createContext } from "react";
import User from "../../types/auth/User";

const AuthContext = createContext<{
	user: User | null;
	setUser: (newUser: User) => void
}>({ user: null, setUser: () => {}});

export default AuthContext;
