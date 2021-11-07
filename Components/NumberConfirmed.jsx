import React from 'react'
import { Text, View } from 'react-native'

export default function NumberConfirmed(props) {
    return (
        <View>
        <Text> {props.confirmed?props.enterNumber:null} </Text>
         {/* confirmed === true */}
        </View>
    )
}
