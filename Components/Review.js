import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Review = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have you tried our new burger?</Text>
      <Image style={styles.burgerImg} source={{ uri: "https://i.ibb.co/L8hcxxW/burger.jpg" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    color: "white",
    fontFamily: "Montserrat-bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
  },
  burgerImg: {
    width: "100%",
    height: 250
  }
})

export default Review