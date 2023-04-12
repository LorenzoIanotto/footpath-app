import React, { useContext } from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import AuthContext from "../../../contexts/global/AuthContext";
import styles from "./styles";

const AccountSettingsScreen = () => {
	const { user } = useContext(AuthContext);
	return (
		<View style={styles.mainView}>
			<Avatar.Image
				source={{ uri: "https://picsum.photos/100" }}
				size={200}
			/>
			<Text variant="headlineLarge">{user?.name}</Text>
		</View>
	);
};

export default AccountSettingsScreen;
