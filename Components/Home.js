import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Alert, ActivityIndicator, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Banner from './Banner';
import Menu from './Menu';
import ReserveTable from './ReserveTable';
const bg = require("../assets/bg.jpg");

const Home = () => {
  return (
    <ImageBackground style={styles.bgImage} source={bg}>
      <View style={styles.container}>
        <ScrollView>
          <Banner />
          <Menu />
          <ReserveTable />
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  bgImage: {
    height: "100%",
  }
})

export default Home