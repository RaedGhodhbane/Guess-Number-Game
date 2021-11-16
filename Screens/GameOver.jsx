import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import BoxShadow from '../Components/BoxShadow'
import MyButtons from '../Components/MyButtons'
import colors from '../Global/colors'

export default function GameOver(props) {
    return (
        <View style={css.container}>
            <Text> Game Over </Text>
            <Image
        style={css.image}
        source={require('../assets/ok.jpg')}
        resizeMode='cover'
      />
            <BoxShadow> 
            <Text> My number is : {props.userNumberSelected} </Text>
            <Text> Number of Rounds : {props.counter} </Text>
            </BoxShadow>
            <View style={css.bouton}>
                <MyButtons 
                title="Start New Game"
                color={colors.primary}
                onPress= {props.restartGame}
                />
            </View>
            

        </View>
    )
}

const css= StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    bouton : {
        backgroundColor : colors.primary,
    },
    image : {
        width : 250,
        height : 250,
        borderRadius : 150
    }
})