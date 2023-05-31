import { AuthenticationError } from "../../types/auth/AuthenticationError";

const registerUser = async (
	email: string,
	username: string,
	password: string
) => {
	const requestHeaders = new Headers();
	requestHeaders.append("Content-Type", "application/json");

	const requestBody = JSON.stringify({
		email,
		username,
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
			"http://192.168.1.111:8080/api/auth/register",
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

	// TODO handle errors better (eg RegistrationErrors enum)
	if (response.message !== "user_created") {
		throw AuthenticationError.ServerError;
	}
};

export default registerUser;
