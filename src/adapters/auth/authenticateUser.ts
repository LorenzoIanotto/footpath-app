import { AuthenticationError } from "../../types/auth/AuthenticationError";
import User from "../../types/auth/User";


const authenticateUser = async (username: string, password: string): Promise<User> => {
	
	// Authentication logic
	// if (username == "Lorenzo") {
	// 	throw AuthenticationError.NonExistingUser;
	// }

	// if (password == "gigi") {
	// 	throw AuthenticationError.WrongPassword;
	// }

	// await fetch("https://example.com/")

	return { name: username, access_token: password };
};


export default authenticateUser;
