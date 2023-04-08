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

type formData = {
	username: string;
	password: string;
};

const SignInScreen = ({ navigation }: SignInScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Sign In" });
	});

	const {
		login,
		inProgress: authInProgress,
		error: authError,
	} = useContext(AuthContext);

	const form = useForm<formData>();

	function onSubmit({ username, password }: formData) {
		login(username, password);
	}

	return (
		<View style={styles.mainView}>
			<Controller
				name="username"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="username"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={
							authError === AuthenticationError.NonExistingUser
						}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authError === AuthenticationError.NonExistingUser}
			>
				Utente non esistente
			</HelperText>

			<Controller
				name="password"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="password"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={authError === AuthenticationError.WrongPassword}
						secureTextEntry
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authError === AuthenticationError.WrongPassword}
			>
				Password errata
			</HelperText>

			<Button mode="elevated" onPress={form.handleSubmit(onSubmit)}>
				Sign In
			</Button>
			<ActivityIndicator animating={authInProgress} size="large" />
		</View>
	);
};

export default SignInScreen;
