import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { HelloWorld, MyButton } from '@aminmeshk/rn-common';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   RnCommon.multiply(3, 7).then(setResult);
  // }, []);

  return (
    <View style={styles.container}>
      <HelloWorld firstName="Amin" lastName="Meshk" />
      <MyButton title="Amin" />
      {/* <Text>Result: {result}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
