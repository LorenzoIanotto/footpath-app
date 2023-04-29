import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Text} from "react-native-paper";
import styles from "./style"; 


type OpenURLButtonProps = {
  url: string;
  children: string;
};

export const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    Linking.openURL(url);
    
  }, [url]);

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()} style={styles.buttonCont}>
      <Text variant="bodyLarge" style={styles.buttonText}>
        Apri in Google Maps
      </Text>
		</TouchableWithoutFeedback>);
};