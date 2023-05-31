import React from "react";
import {
	createStackNavigator,
	StackScreenProps,
} from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen/SignInScreen";
import NavigationHeader from "../components/general/navigation/NavigationHeader";
import RegisterScreen from "../screens/auth/RegisterScreen/RegisterScreen";

const Stack = createStackNavigator<AuthStackParamList>();

type AuthStackParamList = {
	SignInScreen: undefined;
	RegisterScreen: undefined;
};

export type SignInScreenProps = StackScreenProps<
	AuthStackParamList,
	"SignInScreen"
>;

export type RegisterScreenProps = StackScreenProps<
	AuthStackParamList,
	"RegisterScreen"
>;


const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="SignInScreen"
			screenOptions={{
				header: (props) => <NavigationHeader {...props} />,
			}}
		>
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
			<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
