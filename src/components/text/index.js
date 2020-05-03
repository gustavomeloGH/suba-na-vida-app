import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

import { fonts } from '../../theme/fonts'

const Text = ({ style, ...props }) => (
  <RNText style={[styles.default, style]} {...props}>
    {props.children}
  </RNText>
)

const styles = StyleSheet.create({
  default: {
    fontSize: fonts.size.big,
    fontFamily: fonts.type.base,
  },
})

export default Text
