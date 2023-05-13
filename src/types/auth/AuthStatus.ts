import { AuthenticationError } from "./AuthenticationError";
import User from "./User";

export default interface AuthStatus {
	user: User | null;
	inProgress: boolean;
	error: AuthenticationError | null;
}
