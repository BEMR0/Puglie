import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

/*pantalla home*/
export default function Home({ navigation }) {

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menú"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })


    }, [])
    return (
        <React.Fragment>

            <View style={styles.contenedorssss} >


                <Text style={{ fontSize: 40, fontWeight: 'bold', backgroundColor: '#EAEAEA', color: '#DB996C', borderRadius: 10, top: 10, position: 'absolute', width: '100%', marginTop: 10, padding: 10, textAlign: 'center' }}>Puglie</Text>

                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#235B7A', marginTop: 80 }}>PUCHI</Text>


                <Image source={{
                    uri: 'http://yesofcorsa.com/wp-content/uploads/2017/03/Pug-Wallpaper-HD.jpg',
                    cache: 'only-if-cached'
                }} style={{ width: 280, height: 280, borderRadius: 40, marginTop: 5 }} />
                <View style={{ alignItems: 'flex-start', marginLeft: -40, padding: 5, }}>

                    <Text style={{ fontSize: 18, marginTop: 10, borderBottomColor: '#FF87CA', textAlign: 'left', color: '#235B7A', }} >RAZA: PUG </Text>
                    <Text style={{ fontSize: 18, color: '#235B7A', marginVertical: 5 }} >EDAD: 1 AÑO Y 3 MESES</Text>
                    <Text style={{ fontSize: 18, color: '#235B7A', marginVertical: 5 }} >SEXO: MACHO</Text>
                    <Text style={{ fontSize: 18, color: '#235B7A', marginVertical: 5 }} >CIUDAD HERMOSILLO</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 5 }}>DATOS DE CONTACTO</Text>
                    <Text style={{ fontSize: 18, color: '#235B7A', marginVertical: 5 }} >DUEÑO: LEONARDO MARTINEZ</Text>
                    <Text style={{ fontSize: 18, color: '#235B7A', marginVertical: 5 }} >TELEFONO: (662)1654344</Text>
                </View>


                <View style={styles.buttonContainer}>

                    <TouchableOpacity color="#235b7a"
                        onPress={() => navigation.navigate('Match'
                        )
                        }
                    >
                        <Text style={styles.text}> MATCH </Text>
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
        fontFamily: 'arial',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#235B7A',
        marginTop: 15,
    },
    buttonContainerTop: {
        position: 'absolute',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#235B7A',
        marginTop: 30,
        right: 5,
        top: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});

