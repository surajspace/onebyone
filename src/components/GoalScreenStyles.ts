import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {},
  goalHeaderContainer: {
    marginTop: 70,
    marginBottom: 70,
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
  tasksContainer: {
    marginTop: 30,
    marginBottom: 70,
    marginLeft: 35,
    marginRight: 35,
  },
  taskItem: {
    color: '#3A5068',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
});
