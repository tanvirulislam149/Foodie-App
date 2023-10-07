import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Contact from './Contact';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={({ navigation }) => ({
      headerLeft: () =>
        <Pressable onPress={navigation.toggleDrawer} >
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: 'white', marginLeft: 30, borderRadius: 20 }}>
            <Entypo
              name="menu"
              style={{ fontSize: 25, color: "black", padding: 5 }} />
            <Text style={{ color: "black", fontSize: 18, marginLeft: 5, paddingRight: 10 }}>Menu</Text>
          </View>
        </Pressable>
    })}>
      <Drawer.Screen name="Home" component={Home} options={{
        title: "Home",
        headerTransparent: true,
        headerTitle: ''
      }} />
      <Drawer.Screen name="contact" component={Contact} options={{
        title: "Contact"
      }} />
    </Drawer.Navigator>
  )
}

export default HomeDrawer

const MenuName = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={{ color: "black", padding: 10 }}>something</Text>
    </View>
  )
}