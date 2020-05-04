import React from 'react'
import {Asset} from 'expo-asset'
import {View, ImageBackground, StyleSheet} from "react-native";

import Text from '../../../components/text'
import {fonts} from "../../../theme/fonts";
import {colors} from "../../../theme/colors";

const QuestionCurvedCard = ({text}) => {
    const image = Asset.fromModule(require('../../../../assets/quiz-question-box.png'))
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>{text}</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 150,
        marginTop: 80,
        position: 'relative',
    },
    image: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.solitude,
        fontSize: fonts.size.big,
        fontFamily: fonts.type.semiBold
    }
})

export default QuestionCurvedCard
