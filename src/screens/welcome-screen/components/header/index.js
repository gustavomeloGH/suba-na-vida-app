import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'

import Text from '../../../../components/text'
import { fonts } from '../../../../theme/fonts'
import { colors } from '../../../../theme/colors'
import Button from '../../../../components/button'

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>fakebank</Text>
    <Button bgColor={colors.transparent} width={20} style={styles.button}>
      <Octicons
        name='three-bars'
        color={colors.white}
        style={{ transform: [{ scale: 1.5 }, { scaleX: 1.3 }] }}
      />
    </Button>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: colors.solitude,
    fontFamily: fonts.type.semiBold,
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Header
