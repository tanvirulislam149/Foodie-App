import { View, Text, TextInput, StyleSheet, ImageBackground, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { ActivityIndicator } from 'react-native';


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (confirmPass === password) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user.email;
          setLoading(false);
          Alert.alert(`Welcome ${user}`);
          setEmail("");
          setPassword("");
          setConfirmPass("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          Alert.alert(error.message);
        })
    } else {
      Alert.alert("Password didn't match.")
    }
  }


  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://png.pngtree.com/background/20211215/original/pngtree-modern-simple-elegant-gradient-red-landing-page-website-background-picture-image_1455085.jpg" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputCont}>
          <Text style={styles.label}>Email: </Text>
          <TextInput onChangeText={setEmail} value={email} style={styles.emailInput} autoCapitalize='none' autoCorrect={false} autoComplete="off" />
          <Text style={styles.label}>Password: </Text>
          <View>
            <TextInput onChangeText={setPassword} value={password} style={styles.emailInput} autoCapitalize='none' autoCorrect={false} autoComplete="off" secureTextEntry={showPassword} />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : 'eye'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Text style={styles.label}>Confirm Password: </Text>
          <View>
            <TextInput onChangeText={setConfirmPass} value={confirmPass} style={styles.emailInput} autoCapitalize='none' autoCorrect={false} autoComplete="off" secureTextEntry={showConfirmPass} />
            <MaterialCommunityIcons
              name={showConfirmPass ? "eye-off" : 'eye'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={() => setShowConfirmPass(!showConfirmPass)}
            />
          </View>
          <View style={styles.goToRegisterCont}>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={styles.goToRegister}>Go to login page.</Text>
            </Pressable>
          </View>
          <Pressable style={{ alignSelf: "center" }} onPress={() => handleRegister()}>
            {
              loading ? <ActivityIndicator style={styles.button} color="white" size={30} /> : <Text style={styles.button}>Register</Text>
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
  },
})

export default RegisterPage