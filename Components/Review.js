import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Review = () => {
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
    fontWeight: "700",
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