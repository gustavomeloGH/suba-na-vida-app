import React from 'react'
import PropTypes from 'prop-types'
import { TouchableNativeFeedback, View } from 'react-native'

function TouchableAndroid({
  disabled,
  onPress,
  useForeground,
  rippleColor,
  borderless,
  children,
  ...props
}) {
  return (
    <TouchableNativeFeedback
      {...{ onPress, useForeground, disabled }}
      background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
    >
      <View {...props}>{children}</View>
    </TouchableNativeFeedback>
  )
}

TouchableAndroid.propTypes = {
  onPress: PropTypes.func,
  useForeground: PropTypes.bool,
  rippleColor: PropTypes.string,
  borderless: PropTypes.bool,
}

TouchableAndroid.defaultProps = {
  onPress: () => {},
  useForeground: false,
  rippleColor: undefined,
  borderless: false,
}

export default TouchableAndroid
