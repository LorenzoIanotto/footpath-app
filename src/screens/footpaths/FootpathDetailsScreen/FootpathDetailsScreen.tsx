import React from "react";
import { FootpathDetailsScreenProps } from "../../../navigation/FootpathStack";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FootpathBarCodeScannerFAB from "../../../components/FootpathDetailsScreen/FootpathBarCodeScannerFAB/FootpathBarCodeScannerFAB";

const FootpathDetailsScreen = ({
	navigation,
	route,
}: FootpathDetailsScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: route.params.footpath.name });
	});

	return (
		<>
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
			<ScrollView>
				<Text>{route.params.footpath.description}</Text>
				<Image
					source={{ uri: "https://picsum.photos/100/100" }}
					style={{ height: 100, width: 100 }}
				/>
				<Image
					source={{ uri: "https://picsum.photos/100/100" }}
					style={{ height: 100, width: 100 }}
				/>
				<Image
					source={{ uri: "https://picsum.photos/100/100" }}
					style={{ height: 100, width: 100 }}
				/>
				<Image
					source={{ uri: "https://picsum.photos/100/100" }}
					style={{ height: 100, width: 100 }}
				/>

				<Text>Posizione QR code:</Text>
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
