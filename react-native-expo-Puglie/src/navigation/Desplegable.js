import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import login from '../screens/login';
import HomeScreen from '../screens/Home';
import Details from '../screens/Details';
import Match from '../screens/Match';
import Match2 from '../screens/Match2';
const Drawer = createDrawerNavigator();

export default function Desplegable() {
    return (
        <Drawer.Navigator initialRouteName="login">
            <Drawer.Screen name="Home" options={{ title: "Inicio" }} component={HomeScreen} />
            <Drawer.Screen name="Match" options={{ title: "Cukys"}} component={Match} />
            <Drawer.Screen name="Match2"options={{  title: "Canela" }} component={Match2} />
            <Drawer.Screen name="login" options={{ title: "Cerrar sesión" }} component={login} />

        </Drawer.Navigator>
    )
}


