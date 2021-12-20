import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExampleContainer } from 'src/Containers';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={ExampleContainer} />
  </Tab.Navigator>
);

export default MainNavigator;
