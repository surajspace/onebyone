import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AppStyles from './AppStyles';
import {useDispatch} from 'react-redux';
import {AppViews, toggleView} from '../store/uiSlice';

/**
 * Screen navigator component in the bottom
 * Contins pressable areas that move the layout around, or switch views
 */
export default function ScreenNav() {
  const dispatch = useDispatch();

  return (
    <>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.CALENDAR_VIEW))}>
          <Text style={AppStyles.navButton}>Calendar</Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.GOALS_VIEW))}>
          <Text style={AppStyles.navButton}>Main</Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.GOALS_VIEW))}>
          <Text style={AppStyles.navButton}>Settings</Text>
        </Pressable>
      </View>
    </>
  );
}
