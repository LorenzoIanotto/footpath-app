import { FlatList, Image, View, useWindowDimensions } from "react-native";
import styles from "./styles";

const FootpathCarousel = ({ imagesUri }: FootpathCarouselProps) => {
	const { height, width } = useWindowDimensions();

	return (
		<FlatList
			data={imagesUri}
			keyExtractor={(item, number) => number.toString()}
			horizontal
			pagingEnabled
			renderItem={({ item: uri, index }) => (
				<View style={{ ...styles.carouselImageContainer, width }}>
					<Image source={{ uri }} style={styles.carouselImage} />
				</View>
			)}
		/>
	);
};

type FootpathCarouselProps = {
	imagesUri: string[];
};

export default FootpathCarousel;
