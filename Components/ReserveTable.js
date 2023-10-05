import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ReserveTable = () => {
  return (
    <View style={styles.reserveCont}>
      <Image style={styles.reserveImg} source={{ uri: "https://i.ibb.co/nDCBnhQ/reserve.png" }} />
      <Text style={styles.reserveTable}>Reserve Table</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  reserveCont: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 30,
    alignItems: "center",
  },
  reserveTable: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
  },
  reserveImg: {
    width: 40,
    height: 40
  }
})

export default ReserveTable