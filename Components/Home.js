import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const logo = require("../assets/app-icon.png");
const bg = require("../assets/bg.jpg");

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => {
        setData(res.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Alert.alert(error);
      })
  }, [])


  return (
    <ImageBackground style={styles.bgImage} source={bg}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.logoText}>FOODIE Restaurant</Text>
            <Text style={styles.logoSubText}>Good food & great vides!</Text>
          </View>
          <View>
            <Text style={styles.menuText}>MENU</Text>
            <View>
              {
                loading ?
                  <ActivityIndicator style={{ marginTop: 50 }} color={"white"} size={40} /> :
                  data.length ?
                    data.map(d =>
                      <View key={d.idMeal}>
                        <Image style={styles.mealImg} source={{ uri: d.strMealThumb }} />
                        <Text style={styles.mealTitle}>{d.strMeal}</Text>
                      </View>
                    ) : <Text>No Record Found</Text>
              }

            </View>
          </View>
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
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0, 0.2)',
    paddingVertical: 40
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
    fontSize: 24,
    fontWeight: "700"
  },
  logoSubText: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "700"
  },
  menuText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20
  },
  mealTitle: {
    color: "white",
    fontSize: 20,
  },
  mealImg: {
    width: 200,
    height: 150
  }
})

export default Home