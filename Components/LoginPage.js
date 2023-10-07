import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const LoginPage = () => {
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://png.pngtree.com/background/20211215/original/pngtree-modern-simple-elegant-gradient-red-landing-page-website-background-picture-image_1455085.jpg" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.emailInput} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    // marginHorizontal: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    marginBottom: 20
  },
  emailInput: {
    borderWidth: 2,
    borderColor: "white",
    width: "80%",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5
  }
})

export default LoginPage