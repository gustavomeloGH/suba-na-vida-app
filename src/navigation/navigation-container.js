import React from 'react'
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native'

import AuthNavigator from './navigators/auth-navigator'

const NavigationContainer = () => (
  <RNNavigationContainer>
    <AuthNavigator />
  </RNNavigationContainer>
)

export default NavigationContainer
