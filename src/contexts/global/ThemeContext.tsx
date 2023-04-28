import React, { useContext, useMemo, useState, useCallback } from "react";
import { View, useColorScheme } from "react-native";
import { Avatar, Button, Text, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider, MD3DarkTheme as PaperDarkTheme  } from "react-native-paper";

import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";


const lightTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	"colors": {
		"primary": "rgb(0, 109, 48)",
		"onPrimary": "rgb(255, 255, 255)",
		"primaryContainer": "rgb(103, 255, 144)",
		"onPrimaryContainer": "rgb(0, 33, 10)",
		"secondary": "rgb(0, 104, 116)",
		"onSecondary": "rgb(255, 255, 255)",
		"secondaryContainer": "rgb(151, 240, 255)",
		"onSecondaryContainer": "rgb(0, 31, 36)",
		"tertiary": "rgb(81, 86, 169)",
		"onTertiary": "rgb(255, 255, 255)",
		"tertiaryContainer": "rgb(225, 224, 255)",
		"onTertiaryContainer": "rgb(7, 7, 100)",
		"error": "rgb(186, 26, 26)",
		"onError": "rgb(255, 255, 255)",
		"errorContainer": "rgb(255, 218, 214)",
		"onErrorContainer": "rgb(65, 0, 2)",
		"background": "rgb(252, 253, 247)",
		"onBackground": "rgb(26, 28, 25)",
		"surface": "rgb(252, 253, 247)",
		"onSurface": "rgb(26, 28, 25)",
		"surfaceVariant": "rgb(221, 229, 218)",
		"onSurfaceVariant": "rgb(65, 73, 65)",
		"outline": "rgb(114, 121, 112)",
		"outlineVariant": "rgb(193, 201, 190)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(46, 49, 46)",
		"inverseOnSurface": "rgb(240, 241, 236)",
		"inversePrimary": "rgb(69, 225, 118)",
		"elevation": {
		  "level0": "transparent",
		  "level1": "rgb(239, 246, 237)",
		  "level2": "rgb(232, 242, 231)",
		  "level3": "rgb(224, 237, 225)",
		  "level4": "rgb(222, 236, 223)",
		  "level5": "rgb(217, 233, 219)"
		},
		"surfaceDisabled": "rgba(26, 28, 25, 0.12)",
		"onSurfaceDisabled": "rgba(26, 28, 25, 0.38)",
		"backdrop": "rgba(43, 50, 43, 0.4)"
	  }

};

const darkTheme = {
	...PaperDarkTheme,
	...NavigationDarkTheme,
	"colors": {
		"primary": "rgb(69, 225, 118)",
		"onPrimary": "rgb(0, 57, 22)",
		"primaryContainer": "rgb(0, 83, 34)",
		"onPrimaryContainer": "rgb(103, 255, 144)",
		"secondary": "rgb(79, 216, 235)",
		"onSecondary": "rgb(0, 54, 61)",
		"secondaryContainer": "rgb(0, 79, 88)",
		"onSecondaryContainer": "rgb(151, 240, 255)",
		"tertiary": "rgb(191, 193, 255)",
		"onTertiary": "rgb(33, 37, 120)",
		"tertiaryContainer": "rgb(57, 61, 143)",
		"onTertiaryContainer": "rgb(225, 224, 255)",
		"error": "rgb(255, 180, 171)",
		"onError": "rgb(105, 0, 5)",
		"errorContainer": "rgb(147, 0, 10)",
		"onErrorContainer": "rgb(255, 180, 171)",
		"background": "rgb(26, 28, 25)",
		"onBackground": "rgb(226, 227, 221)",
		"surface": "rgb(26, 28, 25)",
		"onSurface": "rgb(226, 227, 221)",
		"surfaceVariant": "rgb(65, 73, 65)",
		"onSurfaceVariant": "rgb(193, 201, 190)",
		"outline": "rgb(139, 147, 137)",
		"outlineVariant": "rgb(65, 73, 65)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(226, 227, 221)",
		"inverseOnSurface": "rgb(46, 49, 46)",
		"inversePrimary": "rgb(0, 109, 48)",
		"elevation": {
		  "level0": "transparent",
		  "level1": "rgb(28, 38, 30)",
		  "level2": "rgb(29, 44, 32)",
		  "level3": "rgb(31, 50, 35)",
		  "level4": "rgb(31, 52, 36)",
		  "level5": "rgb(32, 56, 38)"
		},
		"surfaceDisabled": "rgba(226, 227, 221, 0.12)",
		"onSurfaceDisabled": "rgba(226, 227, 221, 0.38)",
		"backdrop": "rgba(43, 50, 43, 0.4)"
	  }

};

export type Theme = typeof lightTheme;

export type ThemeType = "dark" | "light";

export interface ThemeContextValue {
	theme: Theme;
	themeType: ThemeType;
	isDarkTheme: boolean;
	toggleThemeType: () => void;
	setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
	theme: lightTheme,
	themeType: "light",
	isDarkTheme: false,
	toggleThemeType: () => {},
	setThemeType: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
	children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const colorScheme = useColorScheme();
	const [themeType, setThemeType] = useState<ThemeType>(colorScheme || "light");

	const toggleThemeType = useCallback(() => {
		setThemeType((prev) => (prev === "dark" ? "light" : "dark"));
	}, []);

	const isDarkTheme = useMemo(() => themeType === "dark", [themeType]);
	const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [
		isDarkTheme,
	]);

	return (
        
            <PaperProvider theme={theme}>
                <ThemeContext.Provider

                    value={{
                        theme,
                        themeType,
                        isDarkTheme,
                        toggleThemeType,
                        setThemeType,
                    }}
                >
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>

    );
};