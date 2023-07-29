import React, {useEffect, useRef} from 'react';
import {Text, View, FlatList, Dimensions} from 'react-native';
import {getDateArray} from '../utils/utils';
import styleFactory from './GoalScreenStyles';

type DayViewProps = {
  timestamp: any;
  ones: Array<number>;
};

type ItemProps = {
  item: DayViewProps;
  styles: any;
};

const DayView = ({item, styles}: ItemProps) => {
  const dateObj = getDateArray(item.timestamp);
  return (
    <View style={styles.calendarColumn}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateField}>{dateObj.month}</Text>
        <Text style={styles.dateNum}>{dateObj.date}</Text>
        <Text style={styles.dateField}>{dateObj.weekday}</Text>
      </View>
      <View style={styles.onesColumn}>
        {item.ones.map((one, index) => {
          const oneStyle = one ? styles.activeOne : styles.passiveOne;
          return (
            <Text key={item.timestamp + '|' + index} style={oneStyle}>
              1
            </Text>
          );
        })}
      </View>
    </View>
  );
};

type GoalScreenProps = {
  activeScreen: any;
};

function GoalScreen(props: GoalScreenProps) {
  console.log(props);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const styles = styleFactory(windowWidth, windowHeight);

  const flatlistRef = useRef<FlatList<DayViewProps>>(null);
  let scrollCalendarIntoView = useRef({});

  useEffect(() => {
    props.activeScreen
      ? (scrollCalendarIntoView.current = {right: 0})
      : (scrollCalendarIntoView.current = {});
    flatlistRef.current?.scrollToOffset({animated: true, offset: 0});
  }, [props.activeScreen, scrollCalendarIntoView]);

  let onesData: DayViewProps[] = [
    {timestamp: 1690661323853, ones: [0, 0, 0, 1, 0]},
    {timestamp: 1690569000000, ones: [0, 1, 1, 1, 1]},
    {timestamp: 1690482600000, ones: [1, 0, 1, 1, 0]},
    {timestamp: 1690396200000, ones: [1, 1, 1, 0, 1]},
    {timestamp: 1690309800000, ones: [1, 0, 0, 1, 0]},
    {timestamp: 1690223400000, ones: [1, 1, 0, 0, 1]},
    {timestamp: 1690137000000, ones: [0, 0, 1, 1, 0]},
    {timestamp: 1690050600000, ones: [1, 0, 1, 1, 1]},
    {timestamp: 1689964200000, ones: [1, 0, 1, 1, 1]},
    {timestamp: 1689877800000, ones: [0, 1, 1, 1, 0]},
    {timestamp: 1689791400000, ones: [1, 1, 1, 1, 0]},
    {timestamp: 1689705000000, ones: [1, 0, 1, 1, 1]},
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalHeaderContainer}>
        <View style={styles.goalNameContainer}>
          <Text style={styles.goalName}>Goal title</Text>
        </View>
        <View style={styles.goalCountContainer}>
          <Text style={styles.goalCountDone}>80</Text>
          <Text style={styles.goalCountTarget}>| 200</Text>
        </View>
      </View>
      <View
        style={[
          styles.tasksAndCalendarContainer,
          scrollCalendarIntoView.current,
        ]}>
        <View style={styles.tasksContainer}>
          <Text style={styles.taskItem}>Task number one</Text>
          <Text style={styles.taskItem}>Two times lucky</Text>
          <Text style={styles.taskItem}>Fool me thrice, strike one</Text>
          <Text style={styles.taskItem}>May the 4th be with you</Text>
          <Text style={styles.taskItem}>Cinco de Mayo</Text>
        </View>
        <View style={styles.calendarContainer}>
          <FlatList
            ref={flatlistRef}
            horizontal
            inverted
            data={onesData}
            renderItem={({item}) => DayView({item, styles})}
            keyExtractor={item => item.timestamp}
          />
        </View>
      </View>
    </View>
  );
}

export default GoalScreen;
