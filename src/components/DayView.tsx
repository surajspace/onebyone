import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {getDateArray} from '../utils/utils';
import {AppDispatch} from '../store/store';
import {toggleOne} from '../store/onesSlice';

export type DayViewProps = {
  date: any;
  ones: Array<number>;
};

type ItemProps = {
  item: DayViewProps;
  styles: any;
  dispatch: AppDispatch;
};

export const DayView = ({item, styles, dispatch}: ItemProps) => {
  const dateObj = getDateArray(item.date);
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
            <Pressable
              onPress={() =>
                dispatch(
                  toggleOne({
                    date: item.date,
                    goalIndex: index,
                  }),
                )
              }>
              <Text key={item.date + '|' + index} style={oneStyle}>
                1
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
