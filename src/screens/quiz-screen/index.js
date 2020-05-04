import React from 'react'
import {Asset} from 'expo-asset'
import {useSafeArea} from "react-native-safe-area-context";
import {View, Image, ImageBackground, StyleSheet} from 'react-native'

import Text from "../../components/text";
import Button from "../../components/button";
import QuestionCurvedCard from "./QuestionCurvedCard";
import {colors} from "../../theme/colors";

const options = [
    'Facilidade de acesso\nao crédito',
    'Falta de educação financeira',
    'Facilidade de acesso ao\ncrédito e educação financeira',
    'Doença mental'
]

const QuizScreen = () => {
    const insets = useSafeArea()
    const teacher = Asset.fromModule(require('../../../assets/teacher.png'))
    const buttonGreen = Asset.fromModule(require('../../../assets/botton-green.png'))
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <QuestionCurvedCard text={'O que leva as pessoas ao endividamento excessivo?'}/>
            <View style={{flexDirection: 'row'}}>

                <View style={{flexDirection: 'column', marginRight: 20}}>
                    {options.map((option, index) => (
                        <Button key={`option-${index}`} style={styles.button}>
                            <ImageBackground
                                source={buttonGreen}
                                resizeMode={'stretch'}
                                resizeMethod={'scale'}
                                style={styles.buttonImage}
                            >
                                <Text style={styles.buttonText}>
                                    {option}
                                </Text>
                            </ImageBackground>
                        </Button>
                    ))}
                </View>
                <Image source={teacher} style={styles.teacher} resizeMethod={'scale'} resizeMode={'contain'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        justifyContent: 'space-between'
    },
    teacher: {
        bottom: -5,
        width: 150,
        height: 265,
        transform: [{ scaleX: -1 }],
    },
    button: {
        width: 130,
        height: 50,
        marginBottom: 10,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    buttonImage: {
        width: 130,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 10,
        textAlign: 'center',
        color: colors.white,
    },
    quizQuestionContainer: {},
    quizQuestionText: {},
    womanImage: {},
    startButton: {}
})

export default QuizScreen
