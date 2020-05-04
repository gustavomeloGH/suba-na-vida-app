import React from 'react'
import {View, StyleSheet, Image, ImageBackground, StatusBar} from 'react-native'

import {Asset} from 'expo-asset'
import Button from '../../components/button'
import Text from '../../components/text'
import ButtonOutline from '../../components/button-outline'
import { fonts } from '../../theme/fonts'

const ChangePhotoScreen = () => {
    const backgroundImage = Asset.fromModule(require('../../../assets/background-150px.png'))
    const profileImage = Asset.fromModule(require('../../../assets/profile-icon3.png'))
    
    return (
        <View style = {styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>

            <ImageBackground
                style = {styles.backgroundImage} 
                source={backgroundImage}
            >
    
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}> Deseja alterar a foto? </Text>
                </View>

                <View style={styles.imageProfile}>
                    <Image style={{backgroundColor:'white', width:180, height:180,}} resizeMode="contain" resizeMethod="scale" source={profileImage}/>
                </View>
    
                <ButtonOutline text="Enviar foto" style={styles.picureButtonContainer} textStyle={styles.pictureButtonText}/>
                <Button text="clique aqui para continuar..." textStyle={styles.continueButtonText} style={styles.continueButtonContainer}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    backgroundImage:{
        flex:1,
    },
    titleBox:{
        marginTop:130,

        paddingVertical:10,
        marginHorizontal:40,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius:10,

        backgroundColor:"#FFF",    
    },
    titleText:{
        color:"#000000",
        fontSize:25,
        fontFamily: fonts.type.semiBold
    },
    imageProfile:{
        overflow:'hidden',
        alignSelf:'center',
        width:180, 
        height:180, 
        borderRadius:90,

        marginVertical:20,
    },
    pictureButtonText:{
        color:'#FFF',
        fontFamily: fonts.type.semiBold,
        fontSize:25,
    },
    picureButtonContainer:{
        backgroundColor:'rgba(255,255,255, 0.4)',
        elevation:2,
        marginHorizontal:70,

        marginBottom:60
    },
    continueButtonText:{
        color:'#08602C',
    },
    continueButtonContainer:{
        backgroundColor:'transparent',
    }
})

export default ChangePhotoScreen 