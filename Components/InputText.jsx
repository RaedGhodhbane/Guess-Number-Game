import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../Global/colors'

export default function InputText(props) {
    return (
            <TextInput style={css.text} {...props}
            
            />
    )
}

const css = StyleSheet.create({
    text : {
        marginVertical : 20,
        borderBottomColor : colors.grey,
        borderBottomWidth : 2,
        textAlign : "center",
        height : 30,
        width : 40


    }
})
