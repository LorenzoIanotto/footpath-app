import React, { useContext } from "react";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import AuthContext from "../../../contexts/global/AuthContext";
import styles from "./styles";

const AccountSettingsScreen = () => {
	const { user, logout } = useContext(AuthContext);
	return (
		<View style={styles.mainView}>
			<Avatar.Image
				source={{ uri: "https://picsum.photos/100" }}
				size={200}
			/>
			<Text variant="headlineLarge">{user?.name}</Text>
			<Button icon="logout" onPress={logout}>
				Esci
			</Button>
		</View>
	);
};

export default AccountSettingsScreen;
