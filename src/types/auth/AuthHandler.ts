import AuthStatus from "./AuthStatus";

export default interface AuthHandler {
	authStatus: AuthStatus;
	login: (username: string, password: string) => void;
	logout: () => void;
}
