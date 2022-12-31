import { StackHeaderProps } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";

const NavigationHeader = ({
	navigation,
	back,
	route: { name },
	options: { title },
}: StackHeaderProps) => {
	return (
		<Appbar.Header mode="center-aligned">
			{back && <Appbar.BackAction onPress={() => navigation.goBack()} />}
			<Appbar.Content title={title ?? name} />
		</Appbar.Header>
	);
};

export default NavigationHeader;
