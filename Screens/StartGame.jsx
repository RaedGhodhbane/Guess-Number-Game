import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";

import InputText from "../Components/InputText";




export default function StartGame() {

  const [enterNumber, setEnterNumber] = useState("");




  const handleChange = (value) => {

    setEnterNumber(value.replace(/[^0-9]/g,
        ""));

  };

  console.log(enterNumber);

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

});