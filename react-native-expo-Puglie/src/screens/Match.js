import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

/*pantalla Match*/
export default function Match({ navigation }) {
    return (
        <React.Fragment>
            <View style={styles.contenedorssss} >

                <Text style={{ fontSize: 40, fontWeight: 'bold', backgroundColor: '#EAEAEA', color: '#DB996C', borderRadius: 10, top: 10, position: 'absolute', width:'100%', marginTop:10, padding: 10, textAlign: 'center' }}>Puglie</Text>

                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#9A0680', marginTop: 80 }}>CUKYS</Text>

                <Image source={{
                    uri: 'https://i.pinimg.com/564x/6b/06/73/6b0673629dc4cda1c69d1f57633017e2.jpg',
                    cache: 'only-if-cached'
                }} style={{ width: 280, height: 280, borderRadius: 40, marginTop: 5 }} />


                <View style={{ alignItems: 'flex-start', marginLeft: -80, padding: 5, }}>

                    <Text style={{ fontSize: 18, marginTop: 10, borderBottomColor: '#FF87CA', textAlign: 'left', color: '#3F0071' ,}} >RAZA: PUG </Text>
                    <Text style={{ fontSize: 18, color: '#3F0071', marginVertical: 5 }} >EDAD: 9 MESES</Text>
                    <Text style={{ fontSize: 18, color: '#3F0071' , marginVertical: 5}} >SEXO: HEMBRA</Text>
                    <Text style={{ fontSize: 18, color: '#3F0071' , marginVertical: 5}} >CIUDAD HERMOSILLO</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 5 }}>DATOS DE CONTACTO</Text>
                    <Text style={{ fontSize: 18, color: '#3F0071' , marginVertical: 5}} >DUEÑO: CATALINA ROSAS</Text>
                    <Text style={{ fontSize: 18, color: '#3F0071' , marginVertical: 5}} >TELEFONO: (662)4235978</Text>
                </View>


                <View style={styles.buttonContainer}>

                    <TouchableOpacity color="#235b7a"
                        onPress={() => navigation.navigate('Match2')}>
                        <Text style={{ left: 0 }, styles.text}> REMATCH </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer2}>


                    <TouchableOpacity color="#235b7a"
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.text}> Inicio </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    style={styles.buttonContainerTop}
                >
                    <Text style={styles.text}> Cerrar sesión</Text>

                </TouchableOpacity>



            </View>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    contenedorssss: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },


    buttonContainerTop: {
        position: 'absolute',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFD5E5',
        marginTop: 30,
        right: 5,
        top: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFD5E5',
        marginTop: 10,
    },
    buttonContainer2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#FFD5E5',
        marginTop: 0,
        position: 'absolute',
        marginTop: 30,
        top: 20,
        left: 5,
    },
    textInfo: {
        fontSize: 18

    }
});

