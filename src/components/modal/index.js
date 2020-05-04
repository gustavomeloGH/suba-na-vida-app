import React from "react";
import PropTypes from 'prop-types'

import {
    Image
  } from 'react-native'
  
import closeImg  from '../../../assets/exit.png';
import boxModalImg  from '../../../assets/box-level.png';
import buttonRed from '../../../assets/btn-red.png';
import { buttonGreen } from '../../../assets/btn-green.png';
import {colors} from "../../theme/colors";

import {
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native'


const questionButtons = [
  { title: 'Sim', bgImg: buttonRed, action: '' },
  { title: 'Não', bgImg: buttonGreen, action: '' }
]


const ModalComponent = ({
    text,
    imgUrl,
    modalType,
    modalVisible,
    setModalVisible
}) => {
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    // const questionTypeRender = () => {
    //     {questionButtons.map((option, index) => (
    //         <Button key={`option-${index}`} style={styles.button} 
    //             onPress={() => openModal() }>
    //             <ImageBackground
    //                 source={ option.bgImg }
    //                 resizeMode={'stretch'}
    //                 resizeMethod={'scale'}
    //                 style={styles.buttonImage}
    //             >
    //                 <Text style={styles.buttonText}>
    //                     { option.title }
    //                 </Text>
    //             </ImageBackground>
    //         </Button>
    //     ))}
    // } 


    return (
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible} 
        >

            <View style={styles.centeredView}>
                <TouchableHighlight 
                  style={ styles.closeButton }
                  onPress={ () => closeModal() }>
                    <Image style={ styles.closeImg } source={ closeImg } />
                </TouchableHighlight>

                <View style={styles.modalView}>
                    <ImageBackground
                        source={ boxModalImg }
                        resizeMode={'stretch'}
                        resizeMethod={'scale'}
                        style={ styles.boxModalImg }
                    >

                          <Text style={styles.modalText}>Você acaba de perder 5 moedas do seu porquinho.</Text>
                          <Text style={styles.modalText}>Dica: Você economizaria se esperasse um pouco mais e comprasse a vista.</Text>  
                      </ImageBackground>                
                </View>


            </View>
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      modalView: {
        marginTop: 0,
        marginBottom: 40,
        marginHorizontal: 40,
        backgroundColor: "transparent",
        padding: 0,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        lineHeight: 25,
        fontSize: 16
      },
      closeButton: {
        alignSelf: "flex-end"
      },
      closeImg: {
        marginHorizontal: 25,
        width: 60,
        height: 60,
        resizeMode: 'contain'
      },
      boxModalImg: {
        padding: 30,
        width: 300,
        height: 200,
        resizeMode: 'contain'
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
})

ModalComponent.propTypes = {
  text: PropTypes.string,
  imgUrl: PropTypes.string,
  modalType:  PropTypes.oneOf(['confirmation', 'question', 'show']),
  onPress: PropTypes.func,
}

ModalComponent.defaultProps = {
  modalType: 'show',
  onPress: () => {},
}

export default ModalComponent;