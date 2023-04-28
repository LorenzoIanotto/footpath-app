import { FAB } from "react-native-paper";
import styles from "./styles";

const FootpathBarCodeScannerFAB = ({
	onPress,
}: FootpathBarCodeScannerFABProps) => {
	return (
		<FAB
			style={styles.FAB}
			label="Scan QR"
			mode="elevated"
			animated
			icon="qrcode-scan"
			onPress={onPress}
			color="white"
		/>
	);
};

type FootpathBarCodeScannerFABProps = {
	onPress: () => void;
};

export default FootpathBarCodeScannerFAB;
