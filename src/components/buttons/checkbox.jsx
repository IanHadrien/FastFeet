import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

export default function Checkbox({ value, onChange, disabled, label }) {
  return (
    <View className="flex-row  items-center mb-4">
      <CheckBox
        tintColors={{ true: "#1966AE", false: '' }}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      />
      <Text>{label}</Text>
    </View>
  )
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  disabled: false
}
