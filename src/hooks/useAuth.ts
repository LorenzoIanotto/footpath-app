import { useState } from "react";
import authenticateUser from "../adapters/auth/authenticateUser";
import { AuthenticationError } from "../types/auth/AuthenticationError";
import AuthHandler from "../types/auth/AuthHandler";
import AuthStatus from "../types/auth/AuthStatus";

const useAuth = (): AuthHandler => {
	const [authStatus, setAuthStatus] = useState<AuthStatus>({
		user: null,
		inProgress: false,
		error: null,
	});

	async function login(username: string, password: string) {
		setAuthStatus({ user: null, inProgress: true, error: null });
		try {
			setAuthStatus({
				user: await authenticateUser(username, password),
				inProgress: false,
				error: null,
			});
		} catch (e) {
			setAuthStatus({
				user: null,
				inProgress: false,
				error: e as AuthenticationError,
			});
		}
	}

	function logout() {
		setAuthStatus({ user: null, inProgress: false, error: null });
	}

	return { authStatus, login, logout };
};

export default useAuth;
