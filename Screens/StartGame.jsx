import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import BoxShadow from "../Components/BoxShadow";

import InputText from "../Components/InputText";
import MyButtons from "../Components/MyButtons";
import NumberConfirmed from "../Components/NumberConfirmed";
import colors from "../Global/colors";




export default function StartGame() {

  const [enterNumber, setEnterNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);




  const handleChange = (value) => {

    setEnterNumber(value.replace(/[^0-9]/g,
        ""));


  };
  
  const handleReset = () => {
      setEnterNumber("")
      setConfirmed(false)
  }

  const handleConfirm = () => {
        setConfirmed(true)
}

  const handleSelect = () => {
        console.log("number selected")
  }


  return (

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
    enterNumber = {enterNumber}
    style={css.output}/>
        <MyButtons 
      onPress={() => handleSelect() }
      title="Select"
      color={colors.grey}/>
     </BoxShadow>
     : null}

    </View>

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