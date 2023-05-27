import React from 'react';
import {
  StyleSheet,

} from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootSiblingParent } from 'react-native-root-siblings';
import AppContainer from 'navigation/appContainer/AppContainer';



const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SheetProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootSiblingParent>
              <AppContainer />
            </RootSiblingParent>
          </PersistGate>
        </Provider>
      </SheetProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({

});

export default App;
