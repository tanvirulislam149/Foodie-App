import { StatusBar } from 'react-native';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetails from './Components/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{
          headerTransparent: true,
        }} />
        <Stack.Screen name="mealDetails" component={MealDetails} options={{
          title: "Details"
        }} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}