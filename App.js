import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import ScreenGame from './Screens/ScreenGame';
import StartGame from './Screens/StartGame';
import GameOver from './Screens/GameOver';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import fonts
const fetchFont = () => {
  return Font.loadAsync({ 
    "boldfont" : require('./assets/fonts/Roboto-Bold.ttf'),
    "regularfont" : require('./assets/fonts/Roboto-Regular.ttf'),
    
  })
}






export default function App() {
const [userNumberSelect, setUserNumberSelect] = useState()
// const [guessRound, setGuessRound] = useState(0)
const [myGameOver, setMyGameOver] = useState(false)
const [myCounter, setMyCounter] = useState(0)
const [isReady, setIsReady] = useState(false)


if (!isReady) {
  return (
    <AppLoading
      startAsync={fetchFont}
      onFinish={() => setIsReady(true)}
      onError={(err) => console.log(err)}
    />
  ); }





//selectNumber = number

const handleChangeUserNumber = (number) => {
  setUserNumberSelect(number)
  // console.log(number)
};

const handleGameOver = () => {
  setMyGameOver(true)
}

const handleGameOverCounter = (round) => {
  setMyCounter(round)
}

const restartGame = () => {
  setUserNumberSelect()
  setMyGameOver(false)
  setMyCounter(0)
}


let myRenderScreen= (
<StartGame handleChangeUserNumber={handleChangeUserNumber}/>
);

if (userNumberSelect && !myGameOver) {
  myRenderScreen = <ScreenGame handleGameOverCounter = {handleGameOverCounter} handleGameOver={handleGameOver} userNumberSelect={userNumberSelect}/>
}

else if (myGameOver) {
  myRenderScreen = <GameOver counter = {myCounter} userNumberSelected= {userNumberSelect} restartGame= {restartGame}/>
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
