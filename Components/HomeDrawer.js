import { View, Text, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Contact from './Contact';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      drawerActiveBackgroundColor: "pink",
      drawerContentContainerStyle: {
        flex: 1,
        justifyContent: "center"
      },
      drawerLabelStyle: {
        fontSize: 20,
        color: "black"
      },
      headerLeft: () => <MenuIcon />
    }}>
      <Drawer.Screen name="Home" component={Home} options={{
        title: "Home",
        headerTransparent: true,
        headerTitle: '',
        drawerIcon: () => <Entypo style={{ marginLeft: 40 }} name="home" size={25} />
      }} />
      <Drawer.Screen name="contact" component={Contact} options={{
        title: "Contact",
        headerTransparent: true,
        headerTitle: "",
        drawerIcon: () => <Entypo style={{ marginLeft: 40 }} name="phone" size={25} />
      }} />
    </Drawer.Navigator>
  )
}

export default HomeDrawer

const MenuIcon = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Pressable onPress={navigation.toggleDrawer}>
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: 'white', marginLeft: 30, borderRadius: 20 }}>
        <Entypo
          name="menu"
          style={{ fontSize: 25, color: "black", padding: 5 }} />
        <Text style={{ color: "black", fontSize: 18, marginLeft: 5, paddingRight: 10, fontFamily: "Montserrat-bold" }}>Menu</Text>
      </View>
    </Pressable>
  )
}