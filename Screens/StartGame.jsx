import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import BoxShadow from "../Components/BoxShadow";

import InputText from "../Components/InputText";
import MyButtons from "../Components/MyButtons";
import NumberConfirmed from "../Components/NumberConfirmed";
import colors from "../Global/colors";




export default function StartGame() {

  const [enterNumber, setEnterNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState('')




  const handleChange = (value) => {

    setEnterNumber(value);
    // .replace(/[^0-9]/g,
    //   "")


  };
  
  const handleReset = () => {
      setEnterNumber("")
      setConfirmed(false)
  }

  const handleConfirm = () => {
        const myNumberChosen = parseInt(enterNumber)
        if (myNumberChosen<=0 || myNumberChosen>=100 || isNaN(myNumberChosen))  {
          Keyboard.dismiss()
          Alert.alert(
            "Invalid Number",
            "Please enter a number between 1 & 99",
            [
              {
                text: "Ok",
                onPress: () => handleReset(),
                style: "destructive"
              },
            ]
          );
        return
        }
        setConfirmed(true)
        Keyboard.dismiss()
        setSelectNumber(myNumberChosen)
        setEnterNumber('')
}

  const handleSelect = () => {
        console.log("number selected")
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={css.screen}>

      <Text> Start Game Screen </Text>

      <InputText

        style={css.input}

        keyboardType="number-pad"

        value={enterNumber}

        onChangeText={handleChange}

        maxLength= {2}

        autoComplete = "off"

      />
    <View style={css.buttonsContainer}>
    <View style={css.buttonContainer}>
    <MyButtons 
      onPress={() => handleReset()}
      title="Reset"
      color={colors.primary}/>
    </View>

    <View style={css.buttonContainer}>
    <MyButtons 
      onPress={() => handleConfirm()}
      title="Confirm"
      color={colors.secendary}/>
    </View>

    </View>

  {confirmed ? <BoxShadow otherStyle={css.myShadow}>
    <Text> Select a Number : </Text>
    <NumberConfirmed
    confirmed = {confirmed}
    enterNumber = {selectNumber}
    style={css.output}/>
        <MyButtons 
      onPress={() => handleSelect() }
      title="Select"
      color={colors.grey}/>
     </BoxShadow>
     : null}
    </View>
    </TouchableWithoutFeedback>

 );

}




const css = StyleSheet.create({

  screen: {

    alignItems: "center",

  },

  input: {

    height: 30,

    width: 40,

  },

  buttonsContainer: {
      flexDirection: "row",
  },

  buttonContainer: {
      width: 80,
      marginHorizontal: 2,
  },

  output: {
    fontSize: 50,
  },

  myShadow: {
    width: '80%',
    alignItems: 'center',
  }
});