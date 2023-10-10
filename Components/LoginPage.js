import { View, Text, TextInput, StyleSheet, ImageBackground, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setLoading(false);
        setEmail("");
        setPassword("");
        Alert.alert(`Welcome back ${user.user.email}`)
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert(error.message);
        setLoading(false);
      })
  }

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://png.pngtree.com/background/20211215/original/pngtree-modern-simple-elegant-gradient-red-landing-page-website-background-picture-image_1455085.jpg" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputCont}>
          <Text style={styles.label}>Email: </Text>
          <TextInput style={styles.emailInput} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} autoComplete="off" />
          <Text style={styles.label}>Password: </Text>
          <View>
            <TextInput style={styles.emailInput} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} autoComplete="off" secureTextEntry={showPassword} />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : 'eye'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <View style={styles.goToRegisterCont}>
            <Pressable onPress={() => navigation.navigate("register")}>
              <Text style={styles.goToRegister}>Click here to register.</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.goToRegister}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => handleLogin()}>
            {
              loading ? <ActivityIndicator style={styles.button} color="white" size={30} /> : <Text style={styles.button}>Login</Text>
            }
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    marginBottom: 20
  },
  inputCont: {
    width: "80%"
  },
  label: {
    color: "white",
  },
  emailInput: {
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
    color: "white",
    fontSize: 18
  },
  button: {
    backgroundColor: "tomato",
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 10
  },
  goToRegister: {
    color: "white",
    paddingBottom: 1,
    textDecorationLine: 'underline'
  },
  goToRegisterCont: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default LoginPage