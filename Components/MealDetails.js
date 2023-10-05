import { View, Text } from 'react-native'
import React from 'react'

const MealDetails = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>MealDetails {id}</Text>
    </View>
  )
}

export default MealDetails