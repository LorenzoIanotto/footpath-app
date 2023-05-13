import { createContext } from "react";
import AuthHandler from "../../types/auth/AuthHandler";

const AuthContext = createContext<AuthHandler>({
	authStatus: {
		user: null,
		inProgress: false,
		error: null,
	},
	login: () => { },
	logout: () => { },
});

export default AuthContext;
