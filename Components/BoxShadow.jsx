import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../Global/colors'

export default function BoxShadow(props) {
    return (
        <View style={{...css.container,...props.otherStyle}}>
            {props.children}
        </View>
    )
}


const css = StyleSheet.create({

    container : {
        shadowColor : colors.black,
        textShadowOffset : { width:0 ,height: 3},
        shadowRadius : 6,
        shadowOpacity : 0.3,
        backgroundColor : colors.white,
        padding : 20,
        borderRadius : 10,
        elevation : 5,
        marginVertical : 40,

    }
})