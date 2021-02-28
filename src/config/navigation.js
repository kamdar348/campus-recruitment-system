import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import studentData from '../screens/studente'
import SignUp from '../screens/SignUp';
import Startpage from '../screens/Startpage';


const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startpage" component={Startpage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="studentData" component={studentData} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;