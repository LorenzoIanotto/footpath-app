import { useContext } from "react";
import AuthContext from "../contexts/global/AuthContext";
import AuthStack from "./AuthStack";
import FootpathStack from "./FootpathStack";

const RootNavigation = () => {
	const { user } = useContext(AuthContext);

	return user ? <FootpathStack /> : <AuthStack />;
};

export default RootNavigation;
