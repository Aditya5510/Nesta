import React from "react";
import Text from "@kaloraat/react-native-text";
import { View, TextInput, ScrollView } from "react-native";
import { useState } from "react";
// import { TouchableOpacity } from "react-native";
import Button from "../components/Button";
import axios from "axios";
import LogoComponent from "../components/LogoComponent";
import { API } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AuthContext } from "../context/auth";


const SignIn = ({ navigation }) => {
  // const [username,setUsername]=useState("")

  const { state, setState } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  // console.log(email, password);

  const handleSubmit = async () => {
    setLoading(true);

    if (!email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/signin", {
        email,
        password,
      });

      if (data.error) {
        alert(data.error)
        setLoading(false)
        return
      }
      else {

        // setState(data);

        await AsyncStorage.setItem("@auth", JSON.stringify(data))
        setLoading(false);
        console.log(data);
        // alert("login succesfull!");
        navigation.navigate("Home");
      }

    }




    catch (err) {
      console.log(err);
      alert("login failed");
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
      <LogoComponent />
      <Text title center>
        SignIn
      </Text>

      <View style={{ padding: 8 }}>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 0.8,
            borderColor: "black",
            borderRadius: 2,
            padding: 8,
            marginBottom: 5,
          }}
          autoCompleteType="email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View style={{ padding: 8 }}>
        <TextInput
          placeholder="password"
          style={{
            borderWidth: 0.8,
            borderColor: "black",
            borderRadius: 2,
            padding: 8,
            marginBottom: 10,
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <Button
        title={"Sign In"}
        handleSubmit={handleSubmit}
        loading={Loading}
        style={{ marginBottom: 5 }}
      />
      <Text center small>
        Not yet Registered?{" "}
        <Text
          bold
          medium
          color="#BF2E1A"
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </Text>

      <Text bold medium center color="#F18F1D">
        Forgot Password
      </Text>
    </ScrollView>
  );
};

export default SignIn;
