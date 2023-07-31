import React from 'react';
import {Text, View, Dimensions, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styleFactory from './GoalScreenStyles';
import {RootState} from '../store/store';
import {toggleOne} from '../store/onesSlice';

export default function TaskListView() {
  const windowWidth = Dimensions.get('window').width;
  const styles = styleFactory(windowWidth);

  const tasksList = useSelector((state: RootState) => state.ones.tasksList);
  const onesToday = useSelector((state: RootState) => state.ones.onesToday);
  const dispatch = useDispatch();

  const taskListItems = tasksList.map((task, index) => {
    let taskListItemStyle: any[] = [styles.taskItem];
    if (onesToday[index]) {
      taskListItemStyle.push({
        fontWeight: 'bold',
        color: '#6FFFE9',
      });
    }
    return (
      <Pressable onPress={() => dispatch(toggleOne({goalIndex: index}))}>
        <Text style={taskListItemStyle}>{task}</Text>
      </Pressable>
    );
  });

  return <View style={styles.tasksContainer}>{taskListItems}</View>;
}
