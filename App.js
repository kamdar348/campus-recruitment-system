/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import AppNavigation from "./src/config/navigation";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <AppNavigation />
     );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },

  TxtIn: {
    alignItems: 'center',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: '200%',
    fontSize:50,
    color:'white'
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: "100%"
  },
  footer: {
    flex: 0.2,
    alignItems: 'baseline',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})

export default App;
