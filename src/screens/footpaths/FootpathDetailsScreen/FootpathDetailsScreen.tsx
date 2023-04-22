import React from "react";
import { FootpathDetailsScreenProps } from "../../../navigation/FootpathStack";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FootpathBarCodeScannerFAB from "../../../components/FootpathDetailsScreen/FootpathBarCodeScannerFAB/FootpathBarCodeScannerFAB";
import styles from "./styles";
import FootpathCarousel from "../../../components/FootpathDetailsScreen/FootpathCarousel/FootpathCarousel";

const FootpathDetailsScreen = ({
	navigation,
	route,
}: FootpathDetailsScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: route.params.footpath.name });
	});

	return (
		<>
			<ScrollView>
				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0322,
						longitudeDelta: 0.0121,
					}}
					style={{
						width: "100%",
						height: 300,
					}}
				>
					<Marker
						title="inizio"
						coordinate={{
							latitude: 37.78825,
							longitude: -122.4324,
						}}
					/>
					<Marker
						title="midpath"
						coordinate={{ latitude: 37.784, longitude: -122.4324 }}
					/>
					<Marker
						title="fine"
						coordinate={{ latitude: 37.78, longitude: -122.4324 }}
					/>
				</MapView>
				<View style={styles.descriptionSection}>
					<Text variant="headlineLarge">
						{route.params.footpath.name}
					</Text>
					<Text variant="bodyLarge">
						{route.params.footpath.description}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Text>
				</View>
				<FootpathCarousel
					imagesUri={[
						"https://picsum.photos/400",
						"https://picsum.photos/200/100",
						"https://picsum.photos/700",
					]}
				/>
				{/* <Text>Posizione QR code:</Text> */}
			</ScrollView>
			<FootpathBarCodeScannerFAB
				onPress={() =>
					navigation.navigate("FootpathBarCodeScannerModal", {
						footpath: route.params.footpath,
					})
				}
			/>
		</>
	);
};

export default FootpathDetailsScreen;
