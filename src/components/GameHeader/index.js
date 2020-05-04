import React, {useRef} from "react";
import {Asset} from "expo-asset";
import {Image, StyleSheet, View} from "react-native";

import Button from "../button";
import {colors} from "../../theme/colors";

const GameHeader = () => {
    const image = useRef(Asset.fromModule(require('../../../assets/menu.png'))).current
    return (
        <View style={styles.container}>
            <Button bgColor={'transparent'} style={styles.button}>
                <Image source={image} style={styles.menuImage} resizeMethod={'scale'} resizeMode={'contain'} />
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: colors.green,
    },
    button: {
        padding: 0,
        width: 50,
        marginLeft: 10
    },
    menuImage: {
        width: 50
    }
})

export default GameHeader
