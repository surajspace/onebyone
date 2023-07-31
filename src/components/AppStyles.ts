import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
  },

  scrollArea: {
    flex: 1,
    backgroundColor: '#202C39',
  },

  bottomBar: {
    width: '100%',
    backgroundColor: '#011627',
    flexBasis: 80,
    flexDirection: 'row',
  },

  navButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navButton: {
    fontSize: 18,
    color: '#355863',
  },

  navButtonActive: {
    fontSize: 18,
    color: '#B74F6F',
  },
});
