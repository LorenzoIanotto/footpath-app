import React from "react";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import { FootpathBarCodeScannerModalProps } from "../../../navigation/FootpathStack";
import { ActivityIndicator, Banner } from "react-native-paper";
import styles from "./styles";
import { View } from "react-native";
import useBarScannerPermission, {
	BarCodePermissionStatus,
} from "./hooks/useBarScannerPermission";

const FootpathBarCodeScannerModal = ({
	navigation,
	route,
}: FootpathBarCodeScannerModalProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Scan QR" });
	});

	const barCodePermissionStatus = useBarScannerPermission();

	return (
		<>
			<Banner
				visible={
					barCodePermissionStatus === BarCodePermissionStatus.Denied
				}
				icon="camera-off"
			>
				{" "}
				Per scannerizzare il QR code ho bisogno del permesso di usare la
				fotocamera{" "}
			</Banner>

			<View style={styles.activityIndicatorContainer}>
				<ActivityIndicator
					size="large"
					animating={
						barCodePermissionStatus ===
						BarCodePermissionStatus.InProgress
					}
				/>
			</View>

			{barCodePermissionStatus === BarCodePermissionStatus.Granted && (
				<BarCodeScanner
					style={styles.barCodeScanner}
					onBarCodeScanned={({ type, data }) => {
						alert(type + " : " + data);
						navigation.goBack();
					}}
				/>
			)}
		</>
	);
};

export default FootpathBarCodeScannerModal;
