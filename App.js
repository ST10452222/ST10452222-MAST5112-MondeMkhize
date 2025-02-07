import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DishProvider } from './context/DishContext';
import MenuScreen from './components/MenuScreen';
import MenuFilterScreen from './components/MenuFilterScreen';
import HomeScreen from './components/HomeScreen';
import MenuInputScreen from './components/MenuInputScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DishProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="MenuFilter" component={MenuFilterScreen} />
          <Stack.Screen name="MenuInput" component={MenuInputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DishProvider>
  );
}
