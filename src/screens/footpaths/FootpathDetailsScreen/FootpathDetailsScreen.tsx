import { View, Text } from "react-native";
import React from "react";
import { FootpathDetailsScreenProps } from "../../../navigation/FootpathStack";

const FootpathDetailsScreen = ({
	navigation,
	route,
}: FootpathDetailsScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: route.params.footpath.name });
	});

	return (
		<View>
			<Text>FootpathDetailsScreen</Text>
		</View>
	);
};

export default FootpathDetailsScreen;
