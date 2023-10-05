import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>(123) 456 789</Text>
      <Text style={styles.footerText}>foodierestaurant@gmail.com</Text>
      <Text style={styles.footerText}>Patenga, Chattogram, Bangladesh</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    padding: 10,
    marginVertical: 30,
    borderTopColor: "white",
    borderTopWidth: 3,
    alignItems: "center"
  },
  footerText: {
    color: "white",
    fontSize: 15,
    marginTop: 10
  }
})

export default Footer