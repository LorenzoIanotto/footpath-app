import React from "react";
import { FootpathDetailsScreenProps } from "../../../navigation/FootpathStack";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { Button, TouchableOpacity, View } from "react-native";
import openMap, { createOpenLink } from 'react-native-open-maps';
import MapView, { Marker } from "react-native-maps";
import FootpathBarCodeScannerFAB from "../../../components/FootpathDetailsScreen/FootpathBarCodeScannerFAB/FootpathBarCodeScannerFAB";
import styles from "./styles";
import FootpathCarousel from "../../../components/FootpathDetailsScreen/FootpathCarousel/FootpathCarousel";
import WebView from "react-native-webview";

const FootpathDetailsScreen = ({
	navigation,
	route,
}: FootpathDetailsScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: route.params.footpath.name });
	});

	const sorgenti = { start : route.params.footpath.start, end: route.params.footpath.end, travelType: "walk" };
	const openMap = createOpenLink(sorgenti);

	return (

		<>
			<View style={{height: "50%", width: "100%"}}>
			<WebView scalesPageToFit={true} bounces={false} javaScriptEnabled source={{html: route.params.footpath.mapCode}}
		
			/>
			</View>
			<ScrollView style={{backgroundColor: "white"}}>
				{/*<MapView
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
				</MapView>}*/}
				{/*<TouchableWithoutFeedback onPress={openMap} style={styles.openMap}>
					<Text variant="bodyLarge" style={{color: "white"}}>
						Apri in Google Maps
					</Text>
			</TouchableWithoutFeedback>*/}
				<View style={styles.descriptionSection}>
					<Text variant="headlineLarge" style={styles.title}>
						{route.params.footpath.name}
					</Text>
					<Text variant="bodyLarge" style={styles.description}>
						{route.params.footpath.description}
					</Text>
				</View>
				<FootpathCarousel
					imagesPath={[
						require("../../../img/NOIMAGE.png"),
						require("../../../img/NOIMAGE.png"),
						require("../../../img/NOIMAGE.png"),
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
