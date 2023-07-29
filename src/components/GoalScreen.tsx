import React from 'react';
import {Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {useSwipe, getDateArray} from '../utils/useSwipe';
import styleFactory from './GoalScreenStyles';

interface DayViewProps {
  date: any;
  ones: Array<number>;
  styles: any;
}
function DayView(props: DayViewProps) {
  const dateObj = getDateArray(props.date);

  console.log(dateObj);

  return (
    <View style={props.styles.calendarColumn}>
      <View style={props.styles.dateContainer}>
        <Text style={props.styles.dateField}>{dateObj.month}</Text>
        <Text style={props.styles.dateNum}>{dateObj.date}</Text>
        <Text style={props.styles.dateField}>{dateObj.weekday}</Text>
      </View>
      <View style={props.styles.onesColumn}>
        {props.ones.map(one => {
          const oneStyle = one
            ? props.styles.activeOne
            : props.styles.passiveOne;
          return <Text style={oneStyle}>1</Text>;
        })}
      </View>
    </View>
  );
}

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

  let onesData = [
    {date: new Date(), ones: [1, 0, 1, 1, 0]},
    {date: new Date('7/27/23'), ones: [1, 1, 1, 0, 1]},
    {date: new Date('7/26/23'), ones: [1, 0, 0, 1, 0]},
    {date: new Date('7/25/23'), ones: [1, 1, 0, 0, 1]},
    {date: new Date('7/24/23'), ones: [0, 0, 1, 1, 0]},
    {date: new Date('7/23/23'), ones: [1, 0, 1, 1, 1]},
    {date: new Date('7/22/23'), ones: [1, 0, 1, 1, 1]},
    {date: new Date('7/21/23'), ones: [0, 1, 1, 1, 0]},
    {date: new Date('7/20/23'), ones: [1, 1, 1, 1, 0]},
    {date: new Date('7/19/23'), ones: [1, 0, 1, 1, 1]},
  ];

  const calendarItem: Array<any> = [];
  onesData.forEach(onesDataRow => {
    calendarItem.push(
      <DayView
        date={onesDataRow.date}
        ones={onesDataRow.ones}
        styles={styles}
      />,
    );
  });

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
        <View style={styles.calendarContainer}>{calendarItem}</View>
      </View>
    </View>
  );
}

export default GoalScreen;
