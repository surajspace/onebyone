import React from 'react';
import {Text, View} from 'react-native';
import styles from './GoalScreenStyles';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function GoalScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalHeaderContainer}>
        <View style={styles.goalNameContainer}>
          <Text style={styles.goalName}>1000-XM5</Text>
        </View>
        <View style={styles.goalCountContainer}>
          <Text style={styles.goalCountDone}>80</Text>
          <Text style={styles.goalCountTarget}>| 200</Text>
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.taskItem}>Task number one</Text>
        <Text style={styles.taskItem}>Two times lucky</Text>
        <Text style={styles.taskItem}>Fool me thrice, strike one</Text>
        <Text style={styles.taskItem}>May the 4th be with you</Text>
        <Text style={styles.taskItem}>Cinco de Mayo</Text>
      </View>
    </View>
  );
}

export default GoalScreen;
