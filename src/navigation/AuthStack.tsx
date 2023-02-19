import React from "react";
import {
	createStackNavigator,
	StackScreenProps,
} from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen/SignInScreen";
import NavigationHeader from "../components/general/navigation/NavigationHeader";

const Stack = createStackNavigator<AuthStackParamList>();

type AuthStackParamList = {
	SignInScreen: undefined;
};

export type SignInScreenProps = StackScreenProps<
	AuthStackParamList,
	"SignInScreen"
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
		</Stack.Navigator>
	);
};

export default AuthStack;
