import React from 'react';
import {Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {useSwipe} from '../utils/useSwipe';
import styleFactory from './GoalScreenStyles';

function GoalScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const styles = styleFactory(windowWidth, windowHeight);

  function onSwipeLeft() {
    console.log('SWIPE_LEFT');
  }

  function onSwipeRight() {
    console.log('SWIPE_RIGHT');
  }

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, 6);

  return (
    <View
      style={styles.mainContainer}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <View style={styles.goalHeaderContainer}>
        <View style={styles.goalNameContainer}>
          <Text style={styles.goalName}>Goal title</Text>
        </View>
        <View style={styles.goalCountContainer}>
          <Text style={styles.goalCountDone}>80</Text>
          <Text style={styles.goalCountTarget}>| 200</Text>
        </View>
      </View>
      <View style={styles.tasksAndCalendarContainer}>
        <View style={styles.tasksContainer}>
          <Text style={styles.taskItem}>Task number one</Text>
          <Text style={styles.taskItem}>Two times lucky</Text>
          <Text style={styles.taskItem}>Fool me thrice, strike one</Text>
          <Text style={styles.taskItem}>May the 4th be with you</Text>
          <Text style={styles.taskItem}>Cinco de Mayo</Text>
        </View>
        <View style={styles.calendarContainer}>
          <Text style={styles.taskItem}>Task number one</Text>
          <Text style={styles.taskItem}>Two times lucky</Text>
          <Text style={styles.taskItem}>Fool me thrice, strike one</Text>
          <Text style={styles.taskItem}>May the 4th be with you</Text>
          <Text style={styles.taskItem}>Cinco de Mayo</Text>
        </View>
      </View>
    </View>
  );
}

export default GoalScreen;
