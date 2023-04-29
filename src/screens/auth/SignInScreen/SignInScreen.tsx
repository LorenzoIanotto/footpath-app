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
import {Image} from "react-native";
import { SvgUri } from "react-native-svg";

type formData = {
	email: string;
	password: string;
};

const SignInScreen = ({ navigation }: SignInScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Login" });
	});

	const {
		login,
		inProgress: authInProgress,
		error: authError,
	} = useContext(AuthContext);

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
							authError === AuthenticationError.NonExistingUser
						}
						outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
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
						placeholder="Password"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={authError === AuthenticationError.WrongPassword}
						secureTextEntry
						outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authError === AuthenticationError.WrongPassword}
			>
				Password errata
			</HelperText>
			<Button mode="elevated" onPress={form.handleSubmit(onSubmit)} style={styles.button}>
				Login
			</Button>
			<ActivityIndicator animating={authInProgress} size="large" />
		</View>
	);
};

export default SignInScreen;
