import React from "react";

import {WebView} from 'react-native-webview';

const yt = "https://www.youtube.com/watch?v=yiZZeK-y6cI";

export default function CustomMap() {
    return (

        <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled

            source={{
                uri: yt
            }}
            automaticallyAdjustContentInsets={false}
        />

      );
}