import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Alert, ActivityIndicator, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const logo = require("../assets/app-icon.png");
const bg = require("../assets/bg.jpg");

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const windowWidth = useWindowDimensions().width;

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
                    <View style={styles.mealItems}>
                      {
                        data.map(d =>
                          <View key={d.idMeal}>
                            <Image style={[styles.mealImg, { width: windowWidth / 2.2 }]} source={{ uri: d.strMealThumb }} />
                            <View style={styles.titleCont}>
                              <Text style={styles.title}>{d.strMeal}</Text>
                              <Text style={styles.title}>${Math.floor((Math.random() * 10) + 5)}.00</Text>
                            </View>
                          </View>
                        )
                      }
                    </View>
                    : <Text>No Record Found</Text>
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
    marginTop: 50
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "900"
  },
  mealImg: {
    height: 150
  },
  mealItems: {
    flexDirection: "row",
    flexWrap: 'wrap',
    rowGap: 30,
    marginHorizontal: 10,
    marginVertical: 30,
    justifyContent: 'space-between'
  }
})

export default Home