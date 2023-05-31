import { View } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../../../contexts/global/AuthContext";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import styles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { RegisterScreenProps } from "../../../navigation/AuthStack";
import { Image } from "react-native";
import ServerCommunicationErrorDialog from "../../../components/SignInScreen/ServerCommunicationErrorDialog/ServerCommunicationErrorDialog";

type formData = {
	email: string;
	username: string;
	password: string;
};

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Registrati" });
	});

	const { register, authStatus } = useContext(AuthContext);

	const form = useForm<formData>();

	async function onSubmit({ email, username, password }: formData) {
		await register(email, username, password);
		navigation.goBack();
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
						// error={
						// 	authStatus.error ===
						// 	AuthenticationError.NonExistingUser
						// }
						outlineStyle={{
							borderRadius: 20,
							backgroundColor: "#fff",
						}}
					/>
				)}
			/>

			<Controller
				name="username"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Username"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						// error={
						// 	authStatus.error ===
						// 	AuthenticationError.NonExistingUser
						// }
						outlineStyle={{
							borderRadius: 20,
							backgroundColor: "#fff",
						}}
					/>
				)}
			/>

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
						// error={
						// 	authStatus.error ===
						// 	AuthenticationError.WrongPassword
						// }
						secureTextEntry
						outlineStyle={{
							borderRadius: 20,
							backgroundColor: "#fff",
						}}
					/>
				)}
			/>
			<ActivityIndicator
				animating={authStatus.inProgress}
				size="large"
				style={styles.loginButton}
			/>
			<ServerCommunicationErrorDialog />
			<Button mode="elevated" onPress={form.handleSubmit(onSubmit)}>
				Conferma
			</Button>
		</View>
	);
};

export default RegisterScreen;
