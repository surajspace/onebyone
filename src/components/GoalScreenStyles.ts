import {StyleSheet} from 'react-native';

export default (wW: number, wH: number) => {
  return StyleSheet.create({
    mainContainer: {},
    goalHeaderContainer: {
      marginTop: 70,
      marginBottom: 30,
      marginLeft: 35,
      marginRight: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    goalNameContainer: {},
    goalName: {
      color: '#B74F6F',
      fontSize: 30,
      fontWeight: 'bold',
    },
    goalCountContainer: {
      flexDirection: 'row',
    },
    goalCountDone: {
      color: '#B74F6F',
      fontSize: 20,
      fontWeight: 'bold',
    },
    goalCountTarget: {
      color: '#3A5068',
      fontSize: 20,
      fontWeight: 'bold',
    },
    tasksAndCalendarContainer: {
      flexDirection: 'row-reverse',
      position: 'relative',
      right: -0.9 * wW,
    },
    calendarContainer: {
      flexBasis: 0.9 * wW,
      backgroundColor: 'red',
    },
    tasksContainer: {
      flexBasis: wW,
      paddingTop: 70,
      paddingBottom: 70,
      paddingLeft: 35,
      paddingRight: 35,
    },
    taskItem: {
      color: '#3A5068',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 25,
    },
  });
};
