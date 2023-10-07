import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Stack = createNativeStackNavigator();

const UserTab = () => {
  const user = false;
  return (
    <>
      {
        user ?
          <Text>asdf</Text> :
          <Stack.Navigator initialRouteName='login' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="register" component={RegisterPage} />
          </Stack.Navigator>
      }
    </>
  )
}

export default UserTab