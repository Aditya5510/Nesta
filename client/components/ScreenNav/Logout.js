import { react, useContext } from "react";


import { View, TouchableOpacity, SafeAreaView } from "react-native"

import { AuthContext } from "../../context/auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = () => {
    const [state, setState] = useContext(AuthContext)

    const logou = async () => {
        setState({ token: "", user: null })
        await AsyncStorage.removeItem("@auth")
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={logou}>
                <FontAwesome5 name={"sign-out-alt"} size={25} style={{ marginBottom: 3, alignSelf: "center", color: "red" }} />

            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Logout
