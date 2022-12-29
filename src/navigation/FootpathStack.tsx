import {
	createStackNavigator,
	StackScreenProps,
} from "@react-navigation/stack";
import FootpathDetailsScreen from "../screens/footpaths/FootpathDetailsScreen/FootpathDetailsScreen";
import FootpathsListScreen from "../screens/footpaths/FootpathsListScreen/FootpathsListScreen";

const Stack = createStackNavigator<FootpathStackParamList>();

type FootpathStackParamList = {
	FootpathsListScreen: undefined;
	FootpathDetailsScreen: { footpath: Footpath };
};

export type FootpathsListScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathsListScreen"
>;

export type FootpathDetailsScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathDetailsScreen"
>;

const FootpathStack = () => {
	return (
		<Stack.Navigator initialRouteName="FootpathsListScreen">
			<Stack.Screen
				name="FootpathsListScreen"
				component={FootpathsListScreen}
			/>
			<Stack.Screen
				name="FootpathDetailsScreen"
				component={FootpathDetailsScreen}
			/>
		</Stack.Navigator>
	);
};

export default FootpathStack;
