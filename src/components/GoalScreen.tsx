import React, {useEffect, useRef} from 'react';
import {Text, View, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {transformData} from '../utils/utils';
import styleFactory from './GoalScreenStyles';
import {RootState} from '../store/store';
import {DayView, DayViewProps} from './DayView';
import {AppViews} from '../store/uiSlice';

function GoalScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const styles = styleFactory(windowWidth, windowHeight);

  const onesData = useSelector((state: RootState) => state.ones.onesData);
  // const oneToday = useSelector((state: RootState) => state.ones.onesToday);
  const onesTotal = useSelector((state: RootState) => state.ones.onesTotal);
  const activeView = useSelector((state: RootState) => state.ui.activeView);
  const dispatch = useDispatch();

  const flatlistRef = useRef<FlatList<DayViewProps>>(null);
  let scrollCalendarIntoView = useRef({});

  useEffect(() => {
    activeView === AppViews.CALENDAR_VIEW
      ? (scrollCalendarIntoView.current = {right: 0})
      : (scrollCalendarIntoView.current = {});
    flatlistRef.current?.scrollToOffset({animated: true, offset: 0});
  }, [activeView, scrollCalendarIntoView]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalHeaderContainer}>
        <View style={styles.goalNameContainer}>
          <Text style={styles.goalName}>Goal title</Text>
        </View>
        <View style={styles.goalCountContainer}>
          <Text style={styles.goalCountDone}>{onesTotal}</Text>
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
            data={transformData(onesData)}
            renderItem={({item}) => DayView({item, styles, dispatch})}
            keyExtractor={item => item.date}
          />
        </View>
      </View>
    </View>
  );
}

export default GoalScreen;
