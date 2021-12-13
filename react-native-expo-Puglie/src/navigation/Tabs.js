import React from 'react';
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../screens/login';
import HomeScreen from '../screens/Home'; 
import Details from '../screens/Details';
import Match from '../screens/Match';
const Tab   = createBottomTabNavigator();
export default function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen options={{title:'login'}} name="login" component={login}/>
            <Tab.Screen options={{title:'Inicio'}}  name="Home" component={HomeScreen} />
            <Tab.Screen options={{title:'Detalles'}} name="Details" component={Details} />
            <Tab.Screen options={{title:'Match'}}  name="Match" component={Match} />
        </Tab.Navigator>

    )
}


