import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import AuthContext from "../../../contexts/global/AuthContext";
import { AuthenticationError } from "../../../types/auth/AuthenticationError";

const ServerCommunicationErrorDialog = () => {
	const { authStatus } = useContext(AuthContext);
	const [visible, setVisible] = useState<boolean>(true);

	useEffect(() => {

		setVisible(
			authStatus.error === AuthenticationError.ServerError ||
			authStatus.error === AuthenticationError.NetworkError
		);
	}, [authStatus.error])

	const onDismiss = () => {
		setVisible(false);
	}

	return (
		<Portal>
			<Dialog
				visible={visible}
				dismissable
				onDismiss={onDismiss}
			>
				<Dialog.Icon icon="network-strength-off-outline" />
				<Dialog.Title>
					Impossibile comunicare con il server
				</Dialog.Title>
				<Dialog.Content>
					{authStatus.error === AuthenticationError.ServerError && <Text>Errore lato server</Text>}
					{authStatus.error === AuthenticationError.NetworkError && <Text>Errore di rete</Text>}
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={onDismiss}>Ok</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default ServerCommunicationErrorDialog;
