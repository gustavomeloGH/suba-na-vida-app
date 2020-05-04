import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ChangePhotoScreen from '../../screens/change-photo-screen'
import QuizScreen from '../../screens/quiz-screen'
import GameHeader from "../../components/GameHeader";

const GameNavigatorStack = createStackNavigator()

const GameNavigator = () => (
  <GameNavigatorStack.Navigator>
    <GameNavigatorStack.Screen 
      name='QuizScreen'
      component={QuizScreen}
      options={{ header: GameHeader }}
    />
    <GameNavigatorStack.Screen
      name='ChangePhotoScreen'
      component={ChangePhotoScreen}
      options={{ header: () => null }}
    />
  </GameNavigatorStack.Navigator>
)

export default GameNavigator
