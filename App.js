import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import ScreenGame from './Screens/ScreenGame';
import StartGame from './Screens/StartGame';

export default function App() {
const [userNumberSelect, setUserNumberSelect] = useState()

//selectNumber = number

const handleChangeUserNumber = (number) => {
  setUserNumberSelect(number)
  // console.log(number)
};

let myRenderScreen= (
<StartGame handleChangeUserNumber={handleChangeUserNumber}/>
);

if (userNumberSelect) {
  myRenderScreen = <ScreenGame userNumberSelect={userNumberSelect}/>
}

  return (
    <View style={styles.container}>
      <Header/>
      {myRenderScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
