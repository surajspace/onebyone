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

    calendarContainer: {
      paddingTop: 30,
      flexBasis: 0.9 * wW,
    },

    calendarColumn: {
      width: 70,
      textAlign: 'center',
    },

    dateContainer: {},

    dateNum: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#B74F6F',
    },

    dateField: {
      textAlign: 'center',
      color: '#355863',
    },

    onesColumn: {},

    activeOne: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#6FFFE9',
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 25,
    },

    passiveOne: {
      fontSize: 20,
      color: '#355863',
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 25,
    },
  });
};
