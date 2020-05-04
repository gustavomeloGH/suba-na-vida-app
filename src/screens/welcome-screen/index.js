import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from './components/header'
import Text from '../../components/text'
import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import Button from '../../components/button'
import ButtonOutline from '../../components/button-outline'
const WelcomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated translucent={false} barStyle='light-content' />
        <View>
          <Header />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Banking App</Text>
            <Text style={styles.subtitle}>Transfer money</Text>
            <Text style={styles.description}>
              Simplifies and speeds up{'\n'}
              processing internantional{'\n'}
              payments...
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonOutline
            text='Log in'
            style={styles.loginButton}
            icon={
              <AntDesign
                name='login'
                color={colors.white}
                style={styles.loginButtonIcon}
              />
            }
          />
          <Button text='Become a client' style={styles.registerButton}/>
        </View>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: colors.solitude,
    fontFamily: fonts.type.semiBold,
  },
  subtitle: {
    fontSize: 30,
    marginBottom: 15,
    color: colors.solitude,
  },
  description: {
    fontSize: 20,
    letterSpacing: 1.2,
    color: colors.solitude,
    fontFamily: fonts.type.light,
  },
  buttonsContainer: {
    marginHorizontal: 30,
  },
  loginButton: {
    marginBottom: 10,
  },
  registerButton: {
    marginBottom: 30,
  },
  loginButtonIcon: {
    marginRight: 5,
  },
})

export default WelcomeScreen
