import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../Global/colors'
export default function Header() {
    return (
        <View  style={css.container}>
            <Text style={css.text}> Guess Number </Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        height : 80,
        width : "100%",
        backgroundColor : colors.greenColor1,
        alignItems : "center",
        paddingTop : 30,

    },

    text : {
        color : colors.whiteColor,
        fontSize : 20,
        textTransform : "uppercase",
    }
})
