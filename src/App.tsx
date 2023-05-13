import { Provider as PaperProvider } from "react-native-paper";
//import "react-native-gesture-handler";	// NEEDS TO STAY AT THE TOP LEVEL ENTRY
import RootNavigation from "./navigation/RootNavigation";
import AuthContext from "./contexts/global/AuthContext";
import { CombinedDarkTheme, CombinedLightTheme } from "./themes";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import useAuth from "./hooks/useAuth";

const App = () => {
	const authHandler = useAuth();

	const colorScheme = useColorScheme();
	const CombinedDefaultTheme =
		colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

	return (
		<>
			<StatusBar style="auto" />
			<PaperProvider theme={CombinedDefaultTheme}>
				<AuthContext.Provider value={authHandler}>
					<NavigationContainer theme={CombinedDefaultTheme}>
						<RootNavigation />
					</NavigationContainer>
				</AuthContext.Provider>
			</PaperProvider>
		</>
	);
};

export default App;
