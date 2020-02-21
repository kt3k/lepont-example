/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  StatusBar,
} from 'react-native';
import { useRegistry, useBridge } from 'lepont';
import { WebView } from 'react-native-webview';

const App = () => {
  const registry = useRegistry()
  useBridge(registry, 'foo', async () => {
    console.log('foo')
    return 43
  })
  return (
    <WebView
      javaScriptEnabled
      source={{ uri: 'Web.bundle/loader.html' }}
      originWhitelist={['*']}
      ref={registry.ref}
      onMessage={registry.onMessage}
    />
  );
};

export default App;
