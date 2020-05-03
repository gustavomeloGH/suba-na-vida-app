import React from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import TouchableAndroid from '../touchable-android'

const TouchableContainer = Platform.select({
  ios: TouchableOpacity,
  android: TouchableAndroid,
})

function Button({
  color,
  text,
  width,
  style,
  bgColor,
  onPress,
  loading,
  disabled,
  children,
  textStyle,
  marginBottom,
  activityIndicatorColor,
}) {
  const defaultContent = text ? (
    <Text style={[styles.defaultText, { color }, textStyle]}>{text}</Text>
  ) : (
    children
  )

  return (
    <TouchableContainer
      disabled={disabled || loading}
      onPress={loading ? () => {} : onPress}
      style={[
        styles.default,
        {
          width: width,
          borderColor: bgColor,
          marginBottom: marginBottom,
          borderWidth: loading ? 1 : 0,
          backgroundColor: loading ? 'transparent' : bgColor,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={activityIndicatorColor} />
      ) : (
        defaultContent
      )}
    </TouchableContainer>
  )
}

const styles = StyleSheet.create({
  default: {
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderColor: colors.blueRibbon,
  },
  defaultText: {
    fontSize: 18,
    fontFamily: fonts.type.semiBold,
  },
})

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  marginBottom: PropTypes.number,
  activityIndicatorColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Button.defaultProps = {
  color: 'white',
  loading: false,
  marginBottom: 0,
  onPress: () => {},
  bgColor: colors.blueRibbon,
  activityIndicatorColor: colors.whiteLilac,
}

export default Button
