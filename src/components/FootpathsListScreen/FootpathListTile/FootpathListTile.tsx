import { View, Text } from "react-native";
import React from "react";
import { List } from "react-native-paper";

const FootpathListTile = ({ footpath, onPress }: FootpathListTileProps) => {
	return (
		<List.Item
			title={footpath.name}
			description={footpath.description}
			onPress={onPress}
		/>
	);
};

type FootpathListTileProps = {
	footpath: Footpath;
	onPress: () => void;
};

export default FootpathListTile;
