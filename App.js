import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGame from './Screens/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
