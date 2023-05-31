import AuthStatus from "./AuthStatus";

export default interface AuthHandler {
	authStatus: AuthStatus;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	register: (email: string, username: string, password: string) => Promise<void>;
}
