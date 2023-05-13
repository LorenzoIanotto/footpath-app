import {
	FlatList,
	Image,
	View,
	useWindowDimensions,
	ImageSourcePropType,
} from "react-native";
import styles from "./styles";
const FootpathCarousel = ({ imagesSources }: FootpathCarouselProps) => {
	const { width } = useWindowDimensions();
	return (
		<FlatList
			data={imagesSources}
			keyExtractor={(item, number) => number.toString() + item.toString()} // Using both number and item to try to generate unique keys that don't conflict
			horizontal
			pagingEnabled
			renderItem={({ item: source }) => (
				<View style={{ ...styles.carouselImageContainer, width }}>
					<Image source={source} style={styles.carouselImage} />
				</View>
			)}
		/>
	);
};
type FootpathCarouselProps = {
	imagesSources: ImageSourcePropType[];
};
export default FootpathCarousel;
