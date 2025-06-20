// navigation/RootStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerRoutes from './DrawerRoutes'; // ou DrawerNavigator, se for o nome do seu drawer

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
