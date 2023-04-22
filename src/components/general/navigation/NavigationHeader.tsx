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
			elevated
		>
			{back && <Appbar.BackAction onPress={() => navigation.goBack()} />}
			<Appbar.Content title={title ?? name} />
			{headerRight && headerRight({})}
		</Appbar.Header>
	);
};

export default NavigationHeader;
