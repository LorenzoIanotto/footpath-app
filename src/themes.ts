import { adaptNavigationTheme } from "react-native-paper";
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

/*
	https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
*/
const { LightTheme, DarkTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
	reactNavigationDark: NavigationDarkTheme,
});

export const CombinedLightTheme = {
	...MD3LightTheme,
	...LightTheme,
	colors: {
		...MD3LightTheme.colors,
		...LightTheme.colors,
		primary: "rgb(0, 109, 48)",
		onPrimary: "rgb(255, 255, 255)",
		primaryContainer: "rgb(103, 255, 144)",
		onPrimaryContainer: "rgb(0, 33, 10)",
		secondary: "rgb(56, 107, 1)",
		onSecondary: "rgb(255, 255, 255)",
		secondaryContainer: "rgb(183, 244, 129)",
		onSecondaryContainer: "rgb(13, 32, 0)",
		tertiary: "rgb(0, 107, 94)",
		onTertiary: "rgb(255, 255, 255)",
		tertiaryContainer: "rgb(118, 248, 226)",
		onTertiaryContainer: "rgb(0, 32, 27)",
		error: "rgb(186, 26, 26)",
		onError: "rgb(255, 255, 255)",
		errorContainer: "rgb(255, 218, 214)",
		onErrorContainer: "rgb(65, 0, 2)",
		background: "rgb(252, 253, 247)",
		onBackground: "rgb(26, 28, 25)",
		surface: "rgb(252, 253, 247)",
		onSurface: "rgb(26, 28, 25)",
		surfaceVariant: "rgb(221, 229, 218)",
		onSurfaceVariant: "rgb(65, 73, 65)",
		outline: "rgb(114, 121, 112)",
		outlineVariant: "rgb(193, 201, 190)",
		shadow: "rgb(0, 0, 0)",
		scrim: "rgb(0, 0, 0)",
		inverseSurface: "rgb(46, 49, 46)",
		inverseOnSurface: "rgb(240, 241, 236)",
		inversePrimary: "rgb(69, 225, 118)",
		elevation: {
			level0: "transparent",
			level1: "rgb(239, 246, 237)",
			level2: "rgb(232, 242, 231)",
			level3: "rgb(224, 237, 225)",
			level4: "rgb(222, 236, 223)",
			level5: "rgb(217, 233, 219)",
		},
		surfaceDisabled: "rgba(26, 28, 25, 0.12)",
		onSurfaceDisabled: "rgba(26, 28, 25, 0.38)",
		backdrop: "rgba(43, 50, 43, 0.4)",
	},
};
export const CombinedDarkTheme = {
	...MD3DarkTheme,
	...DarkTheme,
	colors: {
		...MD3DarkTheme.colors,
		...DarkTheme.colors,
		primary: "rgb(69, 225, 118)",
		onPrimary: "rgb(0, 57, 22)",
		primaryContainer: "rgb(0, 83, 34)",
		onPrimaryContainer: "rgb(103, 255, 144)",
		secondary: "rgb(156, 215, 105)",
		onSecondary: "rgb(26, 55, 0)",
		secondaryContainer: "rgb(40, 80, 0)",
		onSecondaryContainer: "rgb(183, 244, 129)",
		tertiary: "rgb(85, 219, 198)",
		onTertiary: "rgb(0, 55, 48)",
		tertiaryContainer: "rgb(0, 80, 71)",
		onTertiaryContainer: "rgb(118, 248, 226)",
		error: "rgb(255, 180, 171)",
		onError: "rgb(105, 0, 5)",
		errorContainer: "rgb(147, 0, 10)",
		onErrorContainer: "rgb(255, 180, 171)",
		background: "rgb(26, 28, 25)",
		onBackground: "rgb(226, 227, 221)",
		surface: "rgb(26, 28, 25)",
		onSurface: "rgb(226, 227, 221)",
		surfaceVariant: "rgb(65, 73, 65)",
		onSurfaceVariant: "rgb(193, 201, 190)",
		outline: "rgb(139, 147, 137)",
		outlineVariant: "rgb(65, 73, 65)",
		shadow: "rgb(0, 0, 0)",
		scrim: "rgb(0, 0, 0)",
		inverseSurface: "rgb(226, 227, 221)",
		inverseOnSurface: "rgb(46, 49, 46)",
		inversePrimary: "rgb(0, 109, 48)",
		elevation: {
			level0: "transparent",
			level1: "rgb(28, 38, 30)",
			level2: "rgb(29, 44, 32)",
			level3: "rgb(31, 50, 35)",
			level4: "rgb(31, 52, 36)",
			level5: "rgb(32, 56, 38)",
		},
		surfaceDisabled: "rgba(226, 227, 221, 0.12)",
		onSurfaceDisabled: "rgba(226, 227, 221, 0.38)",
		backdrop: "rgba(43, 50, 43, 0.4)",
	},
};