import { AuthenticationError } from "../../types/auth/AuthenticationError";
import User from "../../types/auth/User";

const authenticateUser = async (
	username: string,
	password: string
): Promise<User> => {
	const requestHeaders = new Headers();
	requestHeaders.append("Content-Type", "application/json");

	const requestBody = JSON.stringify({
		email: username,
		password,
	});

	const requestOptions: RequestInit = {
		method: "POST",
		headers: requestHeaders,
		body: requestBody,
		redirect: "follow",
	};

	let response;

	try {
		response = await fetch(
			"http://localhost:8080/api/auth/login",
			requestOptions
		);
	} catch (_) {
		throw AuthenticationError.NetworkError;
	}

	try {
		response = await response.json();
	} catch (_) {
		throw AuthenticationError.ServerError;
	}

	if (!response.token) {
		if (response.reason === "bad_user") {
			throw AuthenticationError.NonExistingUser;
		}

		if (response.reason === "bad_password") {
			throw AuthenticationError.WrongPassword;
		}

		throw AuthenticationError.ServerError;
	}

	return { name: username, access_token: response.token };
};

export default authenticateUser;
