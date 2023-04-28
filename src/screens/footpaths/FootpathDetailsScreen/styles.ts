import { StyleSheet } from "react-native";

export default StyleSheet.create({
	
	descriptionSection: {
		padding: 20,
		borderRadius: 15,
		justifyContent: "center",
		backgroundColor: "white",
		margin: 20,
		shadowColor: "#00bf59",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 3.84,
		elevation: 6,

	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#00bf59",
	},
	description: {
		paddingTop: "3%",
		fontSize: 15,
		fontWeight: "100",
		color: "#00bf59",
		textAlign: "justify",
	},
	container: {
		borderRadius: 20,
		backgroundColor: "#00bf59",
	},
	openMap:{
		backgroundColor: "#00bf59",
		borderRadius: 20,
		padding: "3%",
		margin: 20,
		alignItems: "center",
		justifyContent: "center",
		color: "white",
		shadowColor: "#00bf59",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 3.84,
		elevation: 6,
	}



});
