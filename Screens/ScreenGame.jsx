import React, { useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import BoxShadow from '../Components/BoxShadow'
import MyButtons from '../Components/MyButtons'
import colors from '../Global/colors'
import { RandomNumber } from '../Utils/randomNumber'

export default function ScreenGame(props) {
    const [currentRandomNumber, setCurrentRandomNumber] = useState(RandomNumber(1,99,props.userNumberSelect))
    const currentLowerNumber = useRef(1)
    const currentGreaterNumber = useRef(99)


    const handleLower= () => {
    if (currentRandomNumber < props.userNumberSelect) {
        return Alert.alert(
                "You are wrong",
                 "The number is greater than RandomNumber ?",
            [
              {
                text: "Ok",
                style: "Cancel"
              },
            ]
          );
    }
    currentGreaterNumber.current = currentRandomNumber
    console.log(currentGreaterNumber.current)
    setCurrentRandomNumber(RandomNumber(currentLowerNumber.current,currentGreaterNumber.current,currentRandomNumber))
}

    const handleGreater= () => {
        if (currentRandomNumber > props.userNumberSelect) {
            return Alert.alert(
                    "You are wrong",
                     "The number is lower than RandomNumber ?",
                [
                  {
                    text: "Ok",
                    style: "Cancel"
                  },
                ]
              );
        }

        currentLowerNumber.current = currentRandomNumber
        console.log(currentLowerNumber.current)
        setCurrentRandomNumber(RandomNumber(currentLowerNumber.current,currentGreaterNumber.current,currentRandomNumber))
}

    return (
        <View style={css.container}>
            <BoxShadow otherStyle={css.box}>
            <Text> Screen Game </Text>
            <Text> {currentRandomNumber} </Text>
            </BoxShadow>
            <BoxShadow otherStyle={css.boxBouttons}>
            <View style={css.buttonStyle}>
            <MyButtons
            title='Lower'
            color={colors.secendary}
            onPress={() => handleLower()}
            />
            </View>
            <View  style={css.buttonStyle}>
            <MyButtons
            onPress={() => handleGreater()}
            title='Greater'
            color={colors.primary}
            />
            </View>
            </BoxShadow>
        </View>
    )
}

const css= StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 10,

    },

    box : {
        width: '50%',
        alignItems: 'center',
    },

    boxBouttons : {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },

    buttonStyle : {
        width : 90,

    }
})
