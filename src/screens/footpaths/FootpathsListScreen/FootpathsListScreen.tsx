import React, { useMemo } from "react";
import { SectionList } from "react-native";
import { List, Text } from "react-native-paper";
import FootpathListTile from "../../../components/FootpathsListScreen/FootpathListTile/FootpathListTile";
import { FootpathsListScreenProps } from "../../../navigation/FootpathStack";
import { Footpath, FootpathStatus } from "../../../types/generic/Footpath";
import styles from "./styles";

const FootpathsListScreen = ({ navigation }: FootpathsListScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Footpaths" });
	});

	const [footpathsList, setFootpathsList] = React.useState<Footpath[]>([]);

	React.useEffect(() => {
		setFootpathsList([
			{
				status: FootpathStatus.Done,
				id: 2,
				name: "Percorso 2",
				description: "Descrizione",
			},
			{
				status: FootpathStatus.Done,
				id: 3,
				name: "Percorso 3",
				description: "Descrizione",
			},
			{
				status: FootpathStatus.Done,
				id: 4,
				name: "Percorso 4",
				description: "Descrizione",
			},
			{
				status: FootpathStatus.Done,
				id: 5,
				name: "Percorso 5",
				description: "Descrizione",
			},
			{
				status: FootpathStatus.InProgress,
				id: 6,
				name: "Percorso 6",
				description: "Descrizione",
			},
		]);
	}, []);

	const inProgressFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.InProgress
			),
		[footpathsList]
	);

	const notDoneFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.NotDone
			),
		[footpathsList]
	);
	const doneFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.Done
			),
		[footpathsList]
	);

	return (
		<SectionList
			sections={[
				{
					title: "In Corso",
					data: inProgressFootpaths,
				},
				{
					title: "Da Percorrere",
					data: notDoneFootpaths,
				},
				{
					title: "Percorsi",
					data: doneFootpaths,
				},
			]}
			renderSectionHeader={({ section: { title, data } }) => (
				<>
					<List.Subheader variant="titleLarge">
						{title}
					</List.Subheader>
					{data.length > 0 || (
						<Text
							variant="bodySmall"
							style={styles.sectionEmptyText}
						>
							Nessun elemento da visualizzare
						</Text>
					)}
				</>
			)}
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
