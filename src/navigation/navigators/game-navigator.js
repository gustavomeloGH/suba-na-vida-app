import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

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
  </GameNavigatorStack.Navigator>
)

export default GameNavigator
