import { View, Text } from "react-native";
import React from "react";
import { FootpathsListScreenProps } from "../../../navigation/FootpathStack";
import { Button } from "react-native-paper";

const FootpathsListScreen = ({ navigation }: FootpathsListScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Footpaths" });
	});

	return (
		<View>
			<Text>FootpathsListScreen</Text>
			<Button
				onPress={() =>
					navigation.navigate("FootpathDetailsScreen", {
						footpath: {
							id: 5,
							name: "Nome",
							description: "Descrizione descrizione lorem ipsum",
						},
					})
				}
			>
				Dettagli
			</Button>
		</View>
	);
};

export default FootpathsListScreen;
