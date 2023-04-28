import { StackHeaderProps } from "@react-navigation/stack";
import { Appbar, useTheme } from "react-native-paper";

const NavigationHeader = ({
	navigation,
	back,
	route: { name },
	options: { title, headerRight },
}: StackHeaderProps) => {
	const theme = useTheme();



	return (
		<Appbar.Header
			// theme={{
			// 	colors: {
			// 		secondaryContainer: theme.colors.primaryContainer,
			// 		onSurface: theme.colors.onPrimaryContainer,
			// 	},
			// }}
			mode="center-aligned"
			theme={theme}

			style={{ backgroundColor: theme.colors.primary }}
		>
			{back && <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />}
			<Appbar.Content title={title ?? name} titleStyle={{ color: theme.colors.onPrimary }} />
			{headerRight && headerRight({}) && <Appbar.Action icon="account-circle" onPress={() => navigation.navigate("AccountSettingsScreen")} color="white" />}
		</Appbar.Header>
	);
};

export default NavigationHeader;
