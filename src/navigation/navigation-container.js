import React from 'react'
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native'

import AuthNavigator from './navigators/auth-navigator'
import GameNavigator from './navigators/game-navigator'

const NavigationContainer = () => (
  <RNNavigationContainer>
    <GameNavigator/>
  </RNNavigationContainer>
)

export default NavigationContainer
