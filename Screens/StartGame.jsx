import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import InputText from '../Components/InputText'

export default function StartGame() {
    return (
        <View style={css.screen}>
            <Text> Start Game Screen </Text>
            <InputText/>
        </View>
    )
}

const css=StyleSheet.create({
    screen : {
        alignItems : "center",
    }
})