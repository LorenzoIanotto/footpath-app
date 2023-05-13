import { Dimensions, Settings, View } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../../../contexts/global/AuthContext";
import {
	ActivityIndicator,
	Avatar,
	Button,
	HelperText,
	TextInput,
	Text,
} from "react-native-paper";
import styles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { AuthenticationError } from "../../../types/auth/AuthenticationError";
import { SignInScreenProps } from "../../../navigation/AuthStack";
import {Image} from "react-native";
import { SvgUri } from "react-native-svg";
import style from "../../../components/FootpathsListScreen/FootpathListTile/style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

type formData = {
	email: string;
	password: string;
};

const SettingsScreen = ({ navigation }: SignInScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Impostazioni" });
	});

	const {
		login,
		logout,
		authStatus,
	} = useContext(AuthContext);

	const form = useForm<formData>();

	function onSubmit({ email, password }: formData) {
		login(email, password);
	}

	
	return (
		<ScrollView style={styles.container}>
		<View style={styles.mainView}>

			<Avatar.Image
				source={require("../../../img/identicon-1682668441112.png")}
				size={150}
				style={styles.avatar}
				theme={{ colors: { primary: "#fff" } }}
			/>

			<Text variant="headlineLarge" style={styles.username} numberOfLines={1}>
				{authStatus.user?.name} 
			</Text>

			<View style={styles.buttonsContainer}>
				<Button icon="logout" mode="elevated" onPress={logout} style={{backgroundColor: "#f7f7f7"}}>
					Esci
				</Button>
			</View>

			<View style={styles.contSett}>
				<Text variant="headlineLarge" style={styles.title} numberOfLines={1}>
					Email
				</Text>
				<Controller
					name="email"
					control={form.control}
					rules={{ required: true }}
					render={({ field: { onChange, value, onBlur } }) => (
						<TextInput 	placeholder="Email"
									onBlur={onBlur}
									onChangeText={onChange}
									onFocus={() => {if (authStatus.error === AuthenticationError.NonExistingUser) {form.clearErrors("email")}} }
									value={value}
									mode="outlined"
									error={authStatus.error === AuthenticationError.NonExistingUser}
									outlineStyle={{borderRadius: 20, backgroundColor: "#fff", width: "100%"}}
									
									/>)}
									
									/>
					<HelperText type="error" visible={authStatus.error === AuthenticationError.NonExistingUser}>
						Utente non esistente
					</HelperText>
				
				<Text variant="headlineLarge" style={styles.title} numberOfLines={1}>
					Password
				</Text>

				<Controller
					name="password"
					control={form.control}
					rules={{ required: true }}
					render={({ field: { onChange, value, onBlur } }) => (
						<TextInput
							placeholder="Password attuale"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							mode="outlined"
							error={authStatus.error === AuthenticationError.WrongPassword}
							outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
							secureTextEntry
						/>
					)}
				/>
				<HelperText type="error"visible={authStatus.error === AuthenticationError.WrongPassword}>
					Password errata
				</HelperText>

				<Controller
					name="password"
					control={form.control}
					rules={{ required: true }}
					render={({ field: { onChange, value, onBlur } }) => (
						<TextInput
							placeholder="Nuova password"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							mode="outlined"
							error={authStatus.error === AuthenticationError.WrongPassword}
							outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
							secureTextEntry
						/>
					)}
				/>

				<Button mode="elevated" onPress={form.handleSubmit(onSubmit)} style={{backgroundColor: "#f7f7f7", borderRadius: 20, marginTop: "15%", marginBottom: "-20%"}}>
					Salva modifiche
				</Button>
				
				<ActivityIndicator animating={authStatus.inProgress} size="large" />

			</View>

			<ActivityIndicator animating={authStatus.inProgress} size="large" />
			
		</View>
		</ScrollView>
	);
};

export default SettingsScreen;
function setState(arg0: { screenHeight: number; }) {
	throw new Error("Function not implemented.");
}

