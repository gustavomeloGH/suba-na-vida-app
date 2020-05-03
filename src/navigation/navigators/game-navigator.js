import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../../screens/welcome-screen'

const GameNavigatorStack = createStackNavigator()

const GameNavigator = () => (
  <GameNavigatorStack.Navigator>
    <GameNavigatorStack.Screen
      name='WelcomeScreen'
      component={WelcomeScreen}
      options={{ header: () => null }}
    />
  </GameNavigatorStack.Navigator>
)

export default GameNavigator
