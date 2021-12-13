
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import Desplegable from './src/navigation/Desplegable';
// import {
//   useFonts,
//   Montserrat_300Light,
// } from '@expo-google-fonts/montserrat';
//const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Desplegable/>
   </NavigationContainer>
  );
}


