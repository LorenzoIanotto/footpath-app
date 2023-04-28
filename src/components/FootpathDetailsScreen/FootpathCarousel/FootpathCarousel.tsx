import { FlatList, Image, View, useWindowDimensions } from "react-native";
import styles from "./styles";

const FootpathCarousel = ({ imagesPath }: FootpathCarouselProps) => {
	const { height, width } = useWindowDimensions();

	return (
		<FlatList
			data={imagesPath}
			keyExtractor={(item, number) => number.toString()}
			horizontal
			pagingEnabled
			//use the render item to render the images of imagesPath
			renderItem={({ item }) => (
				<Image
					source={item}
					style={[styles.carouselImage]}
				/>
			)}
			
		/>
	);
};

type FootpathCarouselProps = {
	imagesPath: string[];
};

export default FootpathCarousel;
