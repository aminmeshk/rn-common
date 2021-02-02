import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * @param {object} props Properties
 * @param {string} props.title Text for the button
 * @param {import('react-native').TextStyle=} props.textStyle
 * @param {import('react-native').ViewStyle=} props.style
 * @param {(event: import('react-native').GestureResponderEvent) => void=} props.onPress
 */
const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress ?? (() => {})}
      style={props.style ?? {}}
    >
      <Text style={props.textStyle ?? {}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
