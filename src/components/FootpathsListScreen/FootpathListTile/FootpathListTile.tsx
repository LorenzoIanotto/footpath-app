import React from "react";
import { List } from "react-native-paper";

const FootpathListTile = ({ footpath, onPress }: FootpathListTileProps) => {
	return (
		<List.Item
			title={footpath.name}
			description={footpath.description}
			onPress={onPress}
			left={props => <List.Image {...props} source={{uri: "https://picsum.photos/400"}} variant="image" />}
		/>
	);
};

type FootpathListTileProps = {
	footpath: Footpath;
	onPress: () => void;
};

export default FootpathListTile;
