import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AppStyles from './AppStyles';
import {useDispatch, useSelector} from 'react-redux';
import {AppViews, toggleView} from '../store/uiSlice';
import {RootState} from '../store/store';

/**
 * Screen navigator component in the bottom
 * Contins pressable areas that move the layout around, or switch views
 */
export default function ScreenNav() {
  const activeView = useSelector((state: RootState) => state.ui.activeView);
  const dispatch = useDispatch();

  return (
    <>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.CALENDAR_VIEW))}>
          <Text
            style={
              activeView === AppViews.CALENDAR_VIEW
                ? AppStyles.navButtonActive
                : AppStyles.navButton
            }>
            Calendar
          </Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.GOALS_VIEW))}>
          <Text
            style={
              activeView === AppViews.GOALS_VIEW
                ? AppStyles.navButtonActive
                : AppStyles.navButton
            }>
            Main
          </Text>
        </Pressable>
      </View>
      <View style={AppStyles.navButtonContainer}>
        <Pressable onPress={() => dispatch(toggleView(AppViews.GOALS_VIEW))}>
          <Text
            style={
              activeView === AppViews.GOALS_VIEW
                ? AppStyles.navButtonActive
                : AppStyles.navButton
            }>
            Settings
          </Text>
        </Pressable>
      </View>
    </>
  );
}
