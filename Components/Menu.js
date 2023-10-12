import { View, Text, StyleSheet, ActivityIndicator, Image, useWindowDimensions, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
        Alert.alert(error.message, "Please check your internet to see item list");
      })
  }, [])

  const [fontsLoaded] = useFonts({
    "Montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View>
      <Text style={styles.menuText}>MENU</Text>
      <View>
        {
          loading ?
            <ActivityIndicator style={{ marginTop: 50 }} color={"white"} size={40} /> :
            data.length !== 0 ?
              <View style={styles.mealItems}>
                {
                  data.map(d =>
                    <Pressable onPress={() => navigation.navigate("mealDetails", { id: d.idMeal })} key={d.idMeal}>
                      <View>
                        <Image style={[styles.mealImg, { width: windowWidth / 2.2 }]} source={{ uri: d.strMealThumb }} />
                        <View style={styles.titleCont}>
                          <Text style={styles.title}>{d.strMeal}</Text>
                          <Text style={styles.title}>${Number(String(d.idMeal).slice(-1)) + 5}.00</Text>
                        </View>
                      </View>
                    </Pressable>
                  )
                }
              </View>
              : <Text style={styles.noRecord}>No Records Found</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontFamily: 'Montserrat-bold'
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5
  },
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat-bold"
  },
  mealImg: {
    height: 150,
    borderRadius: 10
  },
  mealItems: {
    flexDirection: "row",
    flexWrap: 'wrap',
    rowGap: 30,
    marginHorizontal: 10,
    marginVertical: 30,
    justifyContent: 'space-between'
  },
  noRecord: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    marginVertical: 20
  }
})

export default Menu