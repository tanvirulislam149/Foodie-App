import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
const logo = require("../assets/app-icon.png");

const Banner = () => {
  return (
    <View style={styles.innerContainer}>
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
    fontWeight: "700"
  },
  logoSubText: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "700"
  },
})

export default Banner