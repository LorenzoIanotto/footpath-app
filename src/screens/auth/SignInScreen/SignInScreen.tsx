import { View } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../../../contexts/global/AuthContext";
import {
	ActivityIndicator,
	Button,
	HelperText,
	TextInput,
} from "react-native-paper";
import styles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { AuthenticationError } from "../../../types/auth/AuthenticationError";
import { SignInScreenProps } from "../../../navigation/AuthStack";
import { Image } from "react-native";
import ServerCommunicationErrorDialog from "../../../components/SignInScreen/ServerCommunicationErrorDialog/ServerCommunicationErrorDialog";

type formData = {
	email: string;
	password: string;
};

const SignInScreen = ({ navigation }: SignInScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Login" });
	});

	const { login, authStatus } = useContext(AuthContext);

	const form = useForm<formData>();

	function onSubmit({ email, password }: formData) {
		login(email, password);
	}

	return (
		<View style={styles.mainView}>
			<Image
				source={require("../../../img/leaf.png")}
				style={styles.image}
			/>

			<Controller
				name="email"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Email"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={
							authStatus.error ===
							AuthenticationError.NonExistingUser
						}
						outlineStyle={{
							borderRadius: 20,
							backgroundColor: "#fff",
						}}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={
					authStatus.error === AuthenticationError.NonExistingUser
				}
			>
				Utente non esistente
			</HelperText>

			<Controller
				name="password"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Password"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={
							authStatus.error ===
							AuthenticationError.WrongPassword
						}
						secureTextEntry
						outlineStyle={{
							borderRadius: 20,
							backgroundColor: "#fff",
						}}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authStatus.error === AuthenticationError.WrongPassword}
			>
				Password errata
			</HelperText>
			<ActivityIndicator animating={authStatus.inProgress} size="large" style={styles.loginButton} />
			<ServerCommunicationErrorDialog />
			<Button
				mode="elevated"
				onPress={form.handleSubmit(onSubmit)}
			>
				Login
			</Button>
		</View>
	);
};

export default SignInScreen;
