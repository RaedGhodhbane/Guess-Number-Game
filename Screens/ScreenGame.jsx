import React, { useRef, useState, useEffect } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import BoxShadow from '../Components/BoxShadow'
import MyButtons from '../Components/MyButtons'
import colors from '../Global/colors'
import { RandomNumber } from '../Utils/randomNumber'

export default function ScreenGame(props) {
    const {userNumberSelect, handleGameOver, handleGameOverCounter} = props
    const [currentRandomNumber, setCurrentRandomNumber] = useState(RandomNumber(1,99,userNumberSelect))
    const [rounds, setRounds] = useState(0)
    const currentLowerNumber = useRef(1)
    const currentGreaterNumber = useRef(99)
    useEffect(() => {
            if (currentRandomNumber === userNumberSelect) {
            handleGameOver()
            handleGameOverCounter(rounds)
    } 
    }, [currentRandomNumber, userNumberSelect, handleGameOver])


    const handleNextRandom= (params) => {
    if ((params ==='Lower' && currentRandomNumber < userNumberSelect) || (params==='Greater' && currentRandomNumber > userNumberSelect)) {
        return Alert.alert(
                "You are wrong",
                 `The number is ${params ==='Lower' ? 'greater' : "lower"} than the RandomNumber`,
            [
              {
                text: "Ok",
                style: "Cancel"
              },
            ]
          );
    }
    if (params==='Lower') {
            currentGreaterNumber.current = currentRandomNumber
            // console.log(currentGreaterNumber.current)
    }
    else {
        currentLowerNumber.current = currentRandomNumber
        // console.log(currentLowerNumber.current)
    }
    
    
    setCurrentRandomNumber(RandomNumber(currentLowerNumber.current,currentGreaterNumber.current,currentRandomNumber))
    let increment = rounds + 1
    setRounds(increment)
}

    return (
        <ScrollView>
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
            onPress={() => handleNextRandom('Lower')}
            />
            </View>
            <View  style={css.buttonStyle}>
            <MyButtons
            onPress={() => handleNextRandom('Greater')}
            title='Greater'
            color={colors.primary}
            />
            </View>
            </BoxShadow>
        </View>
        </ScrollView>
    )
}

const css= StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 10,
        flex : 1,

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
