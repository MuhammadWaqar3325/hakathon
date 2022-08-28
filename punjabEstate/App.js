import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { colors } from './src/golbal/Styles';
import RootNavigate from './src/navigation/RootNavigate';
import SignInContextProvider from './src/context/authContext';

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="default"
          backgroundColor={colors.statusbar}
        />
        <RootNavigate />
      </View>
    </SignInContextProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
