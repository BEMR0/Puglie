import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/*pantalla Details*/
export default function Details({navigation}){

 //   const {userName, id} = route.params;

    return (
        <React.Fragment>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button title="ir a Home " 
                        onPress={ () => navigation.navigate('Home')} />
               
            </View>
        </React.Fragment>
    )
}


