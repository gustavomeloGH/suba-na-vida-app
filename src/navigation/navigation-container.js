import React from 'react'
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native'

import GameNavigator from "./navigators/game-navigator";

const NavigationContainer = () => (
  <RNNavigationContainer>
    <GameNavigator />
  </RNNavigationContainer>
)

export default NavigationContainer
