import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
const logo = require("../assets/app-icon.png");
const bg = require("../assets/bg.jpg");

const Home = () => {
  return (
    <ImageBackground style={styles.bgImage} source={bg}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.logoText}>FOODIE Restaurant</Text>
          <Text style={styles.logoSubText}>Good food & great vides!</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  innerContainer: {
    alignItems: "center",
    height: "25%",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0, 0.2)'
  },
  bgImage: {
    height: "100%",
  },
  logo: {
    width: 80,
    height: 80
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  logoSubText: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "700"
  }
})

export default Home