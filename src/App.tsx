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
	const [user, setUser] = useState<User | null>(null);

	return (
		<PaperProvider theme={CombinedDarkTheme}>
			<AuthContext.Provider value={{user, setUser}}>
				<NavigationContainer theme={CombinedDarkTheme}>
					<RootNavigation />
				</NavigationContainer>
			</AuthContext.Provider>
		</PaperProvider>
	);
};

export default App;
