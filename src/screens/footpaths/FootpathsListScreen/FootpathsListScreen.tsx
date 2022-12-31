import React from "react";
import { FlatList } from "react-native";
import FootpathListTile from "../../../components/FootpathsListScreen/FootpathListTile/FootpathListTile";
import { FootpathsListScreenProps } from "../../../navigation/FootpathStack";

const FootpathsListScreen = ({ navigation }: FootpathsListScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Footpaths" });
	});

	const [footpathsList, setFootpathsList] = React.useState<Footpath[]>([]);

	React.useEffect(() => {
		setFootpathsList([
			{ id: 1, name: "Percorso 1", description: "Descrizione" },
			{ id: 2, name: "Percorso 2", description: "Descrizione" },
			{ id: 3, name: "Percorso 3", description: "Descrizione" },
			{ id: 4, name: "Percorso 4", description: "Descrizione" },
			{ id: 5, name: "Percorso 5", description: "Descrizione" },
			{ id: 6, name: "Percorso 6", description: "Descrizione" },
		]);
	}, []);

	return (
		<FlatList
			data={footpathsList}
			keyExtractor={(footpath) => footpath.id.toString()}
			renderItem={({ item }) => (
				<FootpathListTile
					footpath={item}
					onPress={() =>
						navigation.navigate("FootpathDetailsScreen", {
							footpath: item,
						})
					}
				/>
			)}
		/>
	);
};

export default FootpathsListScreen;
