import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { Button } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Alert } from 'react-native';

const UserPage = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      const data = JSON.parse(value);
      setUser(data);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };


  useEffect(() => {
    getData();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(async () => {
      await AsyncStorage.removeItem('user')
      navigation.navigate("login")
    }).catch((error) => {
      Alert.alert(error.message);
    });
  }


  return (
    <View>
      <Text>{user?.email}</Text>
      <Button onPress={() => handleSignOut()} title="sign-out" />
    </View>
  )
}

export default UserPage