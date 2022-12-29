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
import "react-native-gesture-handler";
import RootNavigation from "./navigation/RootNavigation";

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
	return (
		<PaperProvider theme={CombinedDarkTheme}>
			<NavigationContainer theme={CombinedDarkTheme}>
				<RootNavigation />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
