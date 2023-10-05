import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MealDetails = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        setData(res.data.meals[0]);
        setLoading(false);
      })
  }, [])


  return (
    <View style={styles.container}>
      {
        loading ?
          <ActivityIndicator style={{ marginTop: 50 }} color={"black"} size={40} /> :
          data ?
            <View style={styles.innerCont}>
              <Image style={styles.mealImg} source={{ uri: data.strMealThumb }} />
              <View style={styles.textCont}>
                <Text style={styles.title}>{data.strMeal}</Text>
                <Text style={styles.title}>${Number(String(data.idMeal).slice(-1)) + 5}.00</Text>
              </View>
              <Text style={styles.normalTitle}>Origin: {data.strArea}</Text>
              <Text style={styles.normalTitle}>Category: {data.strCategory}</Text>
              <Text style={styles.description}>{data.strMeal} is an awesome dish. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem asperiores, quae perspiciatis harum debitis? Qui facere perferendis fugit quis</Text>
            </View> : <Text>No record found.</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20
  },
  innerCont: {
    width: "100%",
  },
  mealImg: {
    width: "100%",
    height: 250
  },
  textCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ff1a1a"
  },
  normalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
  }
})

export default MealDetails