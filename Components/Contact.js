import { View, Text, StyleSheet, ImageBackground, Button, Pressable } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Linking } from 'react-native'

const bg = require("../assets/bg.jpg");

const Contact = () => {
  return (
    <ImageBackground style={styles.bgImage} source={bg}>
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subTitle}>Working Hours 08.00am - 07.00pm</Text>
        <View style={{ margin: 5, marginVertical: 20, flex: 1 }}>
          <MapView
            initialRegion={{
              latitude: 22.2391,
              longitude: 91.8145,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} style={styles.map} >
            <Marker coordinate={{
              latitude: 22.2561994,
              longitude: 91.7924837
            }} />
          </MapView>
        </View>
        <Pressable onPress={() => Linking.openURL(`tel: (123) 456 789`)}>
          <Text style={styles.call}>Call Us</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    height: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  title: {
    marginTop: 70,
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  subTitle: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center"
  },
  map: {
    width: '100%',
    height: '100%',
  },
  call: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    color: "black",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: 'center',
    alignSelf: "center",
    marginBottom: 20
  }
})

export default Contact