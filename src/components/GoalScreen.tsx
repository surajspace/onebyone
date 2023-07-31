import React, {useRef} from 'react';
import {Text, View, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {transformData} from '../utils/utils';
import styleFactory from './GoalScreenStyles';
import {RootState} from '../store/store';
import {DayView, DayViewProps} from './DayView';
import {AppViews} from '../store/uiSlice';
import TaskListView from './TaskListView';

function GoalScreen() {
  const windowWidth = Dimensions.get('window').width;
  const styles = styleFactory(windowWidth);

  const activeView = useSelector((state: RootState) => state.ui.activeView);
  const flatlistRef = useRef<FlatList<DayViewProps>>(null);

  const goalName = useSelector((state: RootState) => state.ones.goalName);
  const onesTarget = useSelector((state: RootState) => state.ones.onesTarget);
  const onesTotal = useSelector((state: RootState) => state.ones.onesTotal);
  const onesData = useSelector((state: RootState) => state.ones.onesData);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalHeaderContainer}>
        <View style={styles.goalNameContainer}>
          <Text style={styles.goalName}>{goalName}</Text>
        </View>
        <View style={styles.goalCountContainer}>
          <Text style={styles.goalCountDone}>{onesTotal}</Text>
          <Text style={styles.goalCountTarget}> | {onesTarget}</Text>
        </View>
      </View>
      <View
        style={[
          styles.tasksAndCalendarContainer,
          activeView === AppViews.GOALS_VIEW ? {right: 0} : {},
        ]}>
        <TaskListView />
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
