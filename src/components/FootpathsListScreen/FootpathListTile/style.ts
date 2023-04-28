import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "center",
        width: "93%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 6,
        shadowColor: "#00bf59",
        marginBottom: "3%",


    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#00bf59",
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: "#00bf59",
    },
    image: {
        width: 10,
		borderRadius: 10,
        marginLeft: 5,
	},
    imageBackground: {
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5%",
        
    },

});