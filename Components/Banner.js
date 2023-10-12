import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
const logo = require("../assets/app-icon.png");
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Banner = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.innerContainer}>
    <View style={styles.innerContainer} onLayout={onLayoutRootView}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.logoText}>FOODIE Restaurant</Text>
      <Text style={styles.logoSubText}>Good food & great vides!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0, 0.2)',
    paddingVertical: 40
  },
  logo: {
    width: 80,
    height: 80
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontFamily: 'Montserrat-bold'
  },
  logoSubText: {
    color: "lightgray",
    fontSize: 16,
    fontFamily: 'Montserrat-bold'
  },
})

export default Banner