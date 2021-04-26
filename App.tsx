import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import AppContext from './src/context/app';
import { useApp } from './src/hooks/useApp';

export default function App() {
  const { doorStatus } = useContext(AppContext)
  const { toastRef, handlePressOpenButton } = useApp()

  return (
    <View style={styles.container}>
      <Toast
        style={styles.toast}
        ref={toastRef}
        opacity={0.8}
        textStyle={{
          fontSize: 16,
        }}
        />
      <TouchableOpacity
        style={styles.button} 
        onPress={handlePressOpenButton}
      >
        <Text style={styles.text}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF33F3',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  },
  toast: {
    backgroundColor: '#43D622',
  }
});
