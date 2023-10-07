import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import UserTab from './UserTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeContainer = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === 'User') {
          iconName = focused ? 'user-circle' : 'user-circle-o';
          return <FontAwesome name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
      <Tab.Screen name="User" component={UserTab} options={{
        headerShown: false
      }} />
    </Tab.Navigator>
  )
}

export default HomeContainer