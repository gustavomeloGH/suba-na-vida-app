import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../../screens/welcome-screen'
import ChangePhotoScreen from '../../screens/change-photo-screen'

const GameNavigatorStack = createStackNavigator()

const GameNavigator = () => (
  <GameNavigatorStack.Navigator>
    <GameNavigatorStack.Screen
      name='ChangePhotoScreen'
      component={ChangePhotoScreen}
      options={{ header: () => null }}
    />
  </GameNavigatorStack.Navigator>
)

export default GameNavigator
