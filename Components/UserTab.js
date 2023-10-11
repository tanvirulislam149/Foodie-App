import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.config';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const UserTab = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const obj = JSON.stringify(user);
        await AsyncStorage.setItem('user', obj);
        navigation.navigate("userPage");
      } else {
        navigation.navigate("login");
      }
    })
  }, [])
  return (
    <>
      <Stack.Navigator initialRouteName='login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="userPage" component={UserPage} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
      </Stack.Navigator>
    </>
  )
}

export default UserTab