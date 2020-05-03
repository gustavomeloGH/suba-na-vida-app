import React from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  View,
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

function ButtonOutline({
  text,
  icon,
  width,
  style,
  color,
  onPress,
  loading,
  disabled,
  children,
  textStyle,
  activityIndicatorColor,
}) {
  const defaultContent: any = text ? (
    <View style={styles.textContainer}>
      {icon}
      <Text style={[styles.defaultText, { color }, textStyle]}>{text}</Text>
    </View>
  ) : (
    children
  )

  return (
    <TouchableContainer
      disabled={disabled || loading}
      onPress={loading ? () => {} : onPress}
      style={[styles.default, { width }, style]}
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
    borderColor: colors.solitude,
  },
  defaultText: {
    fontSize: 18,
    fontFamily: fonts.type.semiBold,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

ButtonOutline.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  marginBottom: PropTypes.number,
  activityIndicatorColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ButtonOutline.defaultProps = {
  color: 'white',
  loading: false,
  marginBottom: 0,
  onPress: () => {},
  bgColor: colors.transparent,
  activityIndicatorColor: colors.whiteLilac,
}

export default ButtonOutline
