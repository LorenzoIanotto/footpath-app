import { createContext } from "react";
import { AuthenticationError } from "../../types/auth/AuthenticationError";
import User from "../../types/auth/User";

const AuthContext = createContext<{
	user: User | null;
	login: (username: string, password: string) => void;
	logout: () => void;
	inProgress: boolean;
	error: AuthenticationError | null;
}>({
	user: null,
	login: () => {},
	logout: () => {},
	inProgress: false,
	error: null,
});

export default AuthContext;
