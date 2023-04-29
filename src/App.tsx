import { Provider as PaperProvider } from "react-native-paper";
//import "react-native-gesture-handler";	// NEEDS TO STAY AT THE TOP LEVEL ENTRY
import RootNavigation from "./navigation/RootNavigation";
import AuthContext from "./contexts/global/AuthContext";
import { useState } from "react";
import User from "./types/auth/User";
import authenticateUser from "./adapters/auth/authenticateUser";
import { AuthenticationError } from "./types/auth/AuthenticationError";
import { CombinedDarkTheme, CombinedLightTheme } from "./themes";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from 'expo-status-bar';


const App = () => {
	const [authStatus, setAuthStatus] = useState<{
		user: User | null;
		inProgress: boolean;
		error: AuthenticationError | null;
	}>({ user: null, inProgress: false, error: null });

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

	const colorScheme = useColorScheme();
	const CombinedDefaultTheme =
		colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

	return (
		<><StatusBar style="auto" />
		<PaperProvider theme={CombinedDefaultTheme}>
			<AuthContext.Provider value={{ ...authStatus, login, logout }}>
				<NavigationContainer theme={CombinedDefaultTheme}>
					<RootNavigation />
				</NavigationContainer>
			</AuthContext.Provider>
		</PaperProvider></>
	);
};

export default App;
