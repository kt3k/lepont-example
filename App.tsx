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

const App = () => {
  const registry = useRegistry()
  useBridge(registry, 'my-api', async () => {
  })
  return (
    <WebView
      source={{ uri: 'https://google.com' }}
      ref={registry.ref}
      onMessage={registry.onMessage}
    />
  );
};

export default App;
