import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../../screens/welcome-screen'

const AuthNavigatorStack = createStackNavigator()

const AuthNavigator = () => (
  <AuthNavigatorStack.Navigator>
    <AuthNavigatorStack.Screen
      name='WelcomeScreen'
      component={WelcomeScreen}
      options={{ header: () => null }}
    />
  </AuthNavigatorStack.Navigator>
)

export default AuthNavigator
