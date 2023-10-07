import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetails from './Components/MealDetails';
import HomeContainer from './Components/HomeContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="homeContainer" component={HomeContainer} options={{
          headerShown: false
        }} />
        <Stack.Screen name="mealDetails" component={MealDetails} options={{
          title: "Product Details"
        }} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}