import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import React from "react";

export enum BarCodePermissionStatus {
	Granted,
	Denied,
	InProgress,
}

const useBarScannerPermission = () => {
	const [barCodePermissionStatus, setBarCodePermissionStatus] =
		React.useState<BarCodePermissionStatus>(
			BarCodePermissionStatus.InProgress
		);

	const [permissionResponse, requestPermission] =
		BarCodeScanner.usePermissions();

	React.useEffect(() => {
		if (permissionResponse === null || permissionResponse.canAskAgain) {
			requestPermission();
		}
	});

	React.useEffect(() => {
		if (permissionResponse === null) {
			setBarCodePermissionStatus(BarCodePermissionStatus.InProgress);
		} else if (permissionResponse?.status === PermissionStatus.GRANTED) {
			setBarCodePermissionStatus(BarCodePermissionStatus.Granted);
		} else if (permissionResponse?.status === PermissionStatus.DENIED) {
			setBarCodePermissionStatus(BarCodePermissionStatus.Denied);
		}
	}, [permissionResponse]);

	return barCodePermissionStatus;
};

export default useBarScannerPermission;
