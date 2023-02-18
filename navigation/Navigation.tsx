import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen';

const Navigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabStack" component={TabStack} />

      </Stack.Navigator>
    );
  };

  const TabStack = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
