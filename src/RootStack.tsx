import React from 'react';
import {Text} from 'react-native';
import Main from './pages/main';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {setTopLevelNavigator} from 'rnf';
const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export function ReactNavigation() {
  const setRef = (ref) => setTopLevelNavigator(ref);
  return (
    <NavigationContainer ref={setRef}>
      <RootStack />
    </NavigationContainer>
  );
}
