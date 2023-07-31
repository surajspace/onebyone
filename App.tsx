import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {store, persistor} from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import StatBar from './src/components/StatBar';
import ScreenNav from './src/components/ScreenNav';
import GoalScreen from './src/components/GoalScreen';
import AppStyles from './src/components/AppStyles';

/**
 * Main App component
 * Highest level flex layout is controlled here
 */
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={AppStyles.mainContainer}>
            <View style={AppStyles.scrollArea}>
              <GoalScreen />
            </View>
            <View style={AppStyles.bottomBar}>
              <ScreenNav />
            </View>
          </View>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
