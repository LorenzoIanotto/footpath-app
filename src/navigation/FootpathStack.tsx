import {
	createStackNavigator,
	StackScreenProps,
} from "@react-navigation/stack";
import NavigationHeader from "../components/general/navigation/NavigationHeader";
import FootpathBarCodeScannerModal from "../screens/footpaths/FootpathBarCodeScannerModal/FootpathBarCodeScannerModal";
import FootpathDetailsScreen from "../screens/footpaths/FootpathDetailsScreen/FootpathDetailsScreen";
import FootpathsListScreen from "../screens/footpaths/FootpathsListScreen/FootpathsListScreen";

const Stack = createStackNavigator<FootpathStackParamList>();

type FootpathStackParamList = {
	FootpathsListScreen: undefined;
	FootpathDetailsScreen: { footpath: Footpath };
	FootpathBarCodeScannerModal: { footpath?: Footpath };
};

export type FootpathsListScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathsListScreen"
>;

export type FootpathDetailsScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathDetailsScreen"
>;

export type FootpathBarCodeScannerModalProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathBarCodeScannerModal"
>;

const FootpathStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="FootpathsListScreen"
			screenOptions={{
				header: (props) => <NavigationHeader {...props} />,
			}}
		>
			<Stack.Group>
				<Stack.Screen
					name="FootpathsListScreen"
					component={FootpathsListScreen}
				/>
				<Stack.Screen
					name="FootpathDetailsScreen"
					component={FootpathDetailsScreen}
				/>
			</Stack.Group>
			<Stack.Group
				screenOptions={{
					presentation: "modal",
				}}
			>
				<Stack.Screen
					name="FootpathBarCodeScannerModal"
					component={FootpathBarCodeScannerModal}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default FootpathStack;
