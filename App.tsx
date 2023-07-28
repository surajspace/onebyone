import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import GoalScreen from './src/components/GoalScreen';
import AppStyles from './src/components/AppStyles';

/**
 * Status bar component
 * Pretty plain, just contains styling info
 */
// interface StatBarProps {}
function StatBar() {
  return <StatusBar barStyle={'light-content'} backgroundColor={'#011627'} />;
}

/**
 * Screen navigator component in the bottom
 * Contins pressable areas that move the layout around, or switch views
 */
// interface ScreenNavProps {}
function ScreenNav() {
  return (
    <>
      <Text style={AppStyles.navButton}>Calendar</Text>
      <Text style={AppStyles.navButton}>1 By 1</Text>
      <Text style={AppStyles.navButton}>Settings</Text>
    </>
  );
}

/**
 * Main App component
 * Highest level flex layout is controlled here
 */
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatBar />
      <View style={AppStyles.mainContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={AppStyles.scrollArea}>
          <GoalScreen />
        </ScrollView>
        <View style={AppStyles.bottomBar}>
          <ScreenNav />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
