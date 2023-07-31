import React from 'react';
import {StatusBar} from 'react-native';

/**
 * Status bar component
 * Pretty plain, just contains styling info
 */
// interface StatBarProps {}
export default function StatBar() {
  return <StatusBar barStyle={'light-content'} backgroundColor={'#202C39'} />;
}
