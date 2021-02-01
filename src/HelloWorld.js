import React from 'react';
import { View, Text } from 'react-native';
import { nameBuilder } from './nameBuilder';

/**
 * @param {{ firstName: string; lastName: string; separator: string | undefined }} props
 */
const HelloWorld = (props) => {
  return (
    <View>
      <Text>
        {nameBuilder(props.firstName, props.lastName, props.separator)}
      </Text>
    </View>
  );
};

export default HelloWorld;
