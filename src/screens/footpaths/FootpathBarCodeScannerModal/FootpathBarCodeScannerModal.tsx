import React from "react";
import { FootpathBarCodeScannerModalProps } from "../../../navigation/FootpathStack";

const FootpathBarCodeScannerModal = ({
	navigation,
	route,
}: FootpathBarCodeScannerModalProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Scan QR" });
	});

	return (
		<>
			<>
				<></>
			</>
		</>
	);
};

export default FootpathBarCodeScannerModal;
