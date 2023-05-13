import React from "react";
import { List } from "react-native-paper";
import { Footpath } from "../../../types/generic/Footpath";
import styles from "./style";

const FootpathListTile = ({ footpath, onPress }: FootpathListTileProps) => {
	return (
		//<ImageBackground source={image} style={styles.imageBackground}>
		<List.Item
			title={footpath.name}
			description={footpath.description}
			onPress={onPress}
			left={(props) => (
				<List.Image
					{...props}
					source={footpath.imgPath}
					style={styles.image}
					variant="image"
				/>
			)}
			titleStyle={styles.title}
			titleNumberOfLines={1}
			descriptionNumberOfLines={1}
			descriptionStyle={styles.description}
			style={styles.container}
		/>
		//</ImageBackground>
	);
};

type FootpathListTileProps = {
	footpath: Footpath;
	onPress: () => void;
};

export default FootpathListTile;
