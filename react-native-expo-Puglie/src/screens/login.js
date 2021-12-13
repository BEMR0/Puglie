import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


/*pantalla login*/
export default function login({ navigation }) {
    return (
        <React.Fragment>
            <View style={styles.contenedor} >

                <Image source={{
                    uri: 'https://i.ibb.co/wSFCJFD/puglie.png',
                    cache: 'only-if-cached'
                }} style={{ width: 300, height: 300, borderRadius: 200 }} />

                <TextInput
                    placeholder="Usuario"
                    style={styles.inputtext}
                />

                <TextInput
                    placeholder="Contraseña"
                    style={styles.inputtext}
                    secureTextEntry={true}
                />

                <Text>Olvidaste tu contraseña </Text>



                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.text}> Login</Text>

                </TouchableOpacity>

            </View>


        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#235B7A',
        marginTop: 30,
    },

    inputtext: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 25,
        width: '70%',
        height: 70,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        margin: 15,
        paddingLeft: 40,

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});



