import { StyleSheet } from "react-native";

export default StyleSheet.create({
	mainView: {
		padding: 20,
		backgroundColor: "white",
		justifyContent: "center",
		paddingTop: "10%",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	avatar: {
		alignSelf: "center",
		marginBottom: "10%",
	},
	contSett: {
		marginTop: 20,
		marginBottom: 0,
		display: "flex",
		flexDirection: "column",
		width: "100%",	
		
	},
	button: {
		marginTop: "10%",
		backgroundColor: "#00bf59",
		borderRadius: 20,
		width: "93%",
		height: "45%",
		justifyContent: "center",
		alignSelf: "center",
	},
	text:{
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
		marginLeft: "7%",
	},
	username: {
		fontSize: 25,
		fontWeight: "500",
		color: "#7a7a7a",
		marginBottom: "5%",
		alignSelf: "center",
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#00bf59",
		marginBottom: "3%",
		marginTop: "5%",
	},

	separator: {
		
		backgroundColor: "white",
		shadowColor: "#00bf59",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 3.84,
		elevation: 6,
		borderRadius: 20,

	},

	container:{
		backgroundColor: "#fff",
		flex: 1,
	}

});
