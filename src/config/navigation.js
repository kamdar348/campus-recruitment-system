import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Blooddonor from '../screens/Blooddonor'
import SignUp from '../screens/SignUp';
import Startpage from '../screens/Startpage';
import Agroup from '../../Bloodgroup/Agroup';
import Bgroup from '../../Bloodgroup/Bgroup'
import Ogroup from '../../Bloodgroup/Ogroup';
import ABgroup from '../../Bloodgroup/ABgroup'

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startpage" component={Startpage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Blooddonor" component={Blooddonor} />
        <Stack.Screen name="Agroup" component={Agroup} />
        <Stack.Screen name="Bgroup" component={Bgroup} />
        <Stack.Screen name="Ogroup" component={Ogroup} />
        <Stack.Screen name="ABgroup" component={ABgroup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;