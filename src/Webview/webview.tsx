import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export const WebScreen = () => {
    return (
        <WebView
        source={{ uri: 'https://suitmedia.com/' }}
      />
    )
}