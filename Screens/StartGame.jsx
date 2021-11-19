import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Dimensions } from "react-native";
import BoxShadow from "../Components/BoxShadow";

import InputText from "../Components/InputText";
import MyButtons from "../Components/MyButtons";
import NumberConfirmed from "../Components/NumberConfirmed";
import colors from "../Global/colors";





export default function StartGame(props) {

  const [enterNumber, setEnterNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState('')
  const [widthButton, setWidthButton] = useState(Dimensions.get('window').width / 4)
  // console.log(Dimensions.get('window').height)
  console.log(Dimensions.get('window'))
  // console.log(Dimensions.get('screens'))


  useEffect(() => {
    const updateWidthButton = () => {
      setWidthButton(Dimensions.get('window').width / 4)
    }
    const dimensionWidth = Dimensions.addEventListener(
      "change",
      updateWidthButton
    );
    return () => dimensionWidth?.remove();
  });


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
        props.handleChangeUserNumber(selectNumber)
  }


  return (
    <ScrollView>
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
    <View style={{width : widthButton}}>
    <MyButtons 
      onPress={() => handleReset()}
      title="Reset"
      color={colors.primary}/>
    </View>

    <View style={{width : widthButton}}>
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
    </ScrollView>

 );

}




const css = StyleSheet.create({

  screen: {

    alignItems: "center",

  },

  input: {

    height: 30,

    width: Dimensions.get('window').width>500 ? 50 : 40,

  },

  buttonsContainer: {
      flexDirection: "row",
  },

  output: {
    fontSize: 50,
  },

  myShadow: {
    width: '80%',
    alignItems: 'center',
  }
});