import {
	adaptNavigationTheme,
	Provider as PaperProvider,
} from "react-native-paper";
import {
	NavigationContainer,
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
//import "react-native-gesture-handler";	// NEEDS TO STAY AT THE TOP LEVEL ENTRY
import RootNavigation from "./navigation/RootNavigation";
import AuthContext from "./contexts/global/AuthContext";
import { useState } from "react";
import User from "./types/auth/User";
import authenticateUser from "./adapters/auth/authenticateUser";
import { AuthenticationError } from "./types/auth/AuthenticationError";

/*
	https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
*/
const { LightTheme, DarkTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
	reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
	...MD3LightTheme,
	...LightTheme,
	colors: {
		...MD3LightTheme.colors,
		...LightTheme.colors,
	},
};
const CombinedDarkTheme = {
	...MD3DarkTheme,
	...DarkTheme,
	colors: {
		...MD3DarkTheme.colors,
		...DarkTheme.colors,
	},
};

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

	return (
		<PaperProvider theme={CombinedDarkTheme}>
			<AuthContext.Provider value={{ ...authStatus, login, logout }}>
				<NavigationContainer theme={CombinedDarkTheme}>
					<RootNavigation />
				</NavigationContainer>
			</AuthContext.Provider>
		</PaperProvider>
	);
};

export default App;
