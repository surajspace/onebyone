import React, {useState} from 'react';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import GoalScreen from './src/components/GoalScreen';
import AppStyles from './src/components/AppStyles';

/**
 * Status bar component
 * Pretty plain, just contains styling info
 */
// interface StatBarProps {}
function StatBar() {
  return <StatusBar barStyle={'light-content'} backgroundColor={'#202C39'} />;
}

/**
 * Screen navigator component in the bottom
 * Contins pressable areas that move the layout around, or switch views
 */
type ScreenNavProps = {
  setActiveScreen: any;
};

function ScreenNav(props: ScreenNavProps) {
  // function navButtonPressHandler() {}
  return (
    <>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => props.setActiveScreen(1)}>
          <Text style={AppStyles.navButton}>Calendar</Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => props.setActiveScreen(0)}>
          <Text style={AppStyles.navButton}>Main</Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => props.setActiveScreen(0)}>
          <Text style={AppStyles.navButton}>Settings</Text>
        </Pressable>
      </View>
    </>
  );
}

/**
 * Main App component
 * Highest level flex layout is controlled here
 */
function App(): JSX.Element {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <SafeAreaView>
      <StatBar />
      <View style={AppStyles.mainContainer}>
        <View style={AppStyles.scrollArea}>
          <GoalScreen activeScreen={activeScreen} />
        </View>
        <View style={AppStyles.bottomBar}>
          <ScreenNav setActiveScreen={setActiveScreen} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
