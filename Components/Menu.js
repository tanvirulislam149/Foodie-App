import { View, Text, StyleSheet, ActivityIndicator, Image, useWindowDimensions, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Menu = () => {
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
                        <Text style={styles.title}>${Number(String(d.idMeal).slice(-1)) + 5}.00</Text>
                      </View>
                    </View>
                  )
                }
              </View>
              : <Text>No Record Found</Text>
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
})

export default Menu