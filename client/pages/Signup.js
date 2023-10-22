import React from 'react'
import Text from "@kaloraat/react-native-text"
import { View, TextInput, ScrollView, Alert } from 'react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import axios from 'axios'
import LogoComponent from '../components/LogoComponent'
import { API } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Signup = ({ navigation }) => {
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Loading, setLoading] = useState(false)
  // console.log(username,email,password)

  const handleSubmit = async () => {
    setLoading(true)

    if (!name || !email || !password) {
      alert("All fields are required")
      setLoading(false)
      return
    }

    try {
      const { data } = await axios.post("/signup", { name, email, password })
      if (data.error) {
        alert(data.error)
        setLoading(false)
        return
      }
      else {
        await AsyncStorage.setItem("@auth", JSON.stringify(data))
        console.log(data)
        alert(" Singup succesfull !")
      }
    } catch (err) {
      alert(" Singup failed please try again later!")
      console.log(err)
      setLoading(false)
    }

  }



  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
      <LogoComponent />
      <Text title center >Signup</Text>
      <View style={{ padding: 8, marginTop: 10 }}>
        <TextInput placeholder="Username" style={{ borderWidth: 0.8, borderColor: "black", borderRadius: 2, padding: 8, marginBottom: 5 }} autoCapitalize="words" autoCorrect={false} value={name} onChangeText={(text) => { setname(text) }} />
      </View>
      <View style={{ padding: 8 }}>
        <TextInput placeholder="Email" style={{ borderWidth: 0.8, borderColor: "black", borderRadius: 2, padding: 8, marginBottom: 5 }} autoCompleteType="email" keyboardType='email-address' value={email} onChangeText={(text) => { setEmail(text) }} />
      </View>
      <View style={{ padding: 8 }}>
        <TextInput placeholder="password" style={{ borderWidth: 0.8, borderColor: "black", borderRadius: 2, padding: 8, marginBottom: 5 }} secureTextEntry={true} value={password} onChangeText={(text) => { setPassword(text) }} />
      </View>
      <Button title={"Sign up"} handleSubmit={handleSubmit} loading={Loading} />
      <Text center>Already have an account? <Text bold medium color="#BF2E1A" onPress={() => navigation.navigate("SignIn")}>Sign In</Text></Text>
    </ScrollView>
  )
}

export default Signup