import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../Global/colors'

export default function InputText(props) {
    console.log(props)
    return (
            <TextInput  {...props} style={{...css.text, ...props.style}}
            
            />
    )
}

const css = StyleSheet.create({
    text : {
        marginVertical : 20,
        borderBottomColor : colors.grey,
        borderBottomWidth : 2,
        textAlign : "center",


    }
})
