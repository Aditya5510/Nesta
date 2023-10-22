import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config";

 const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  axios.defaults.baseURL = API;

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("@auth");
      if (user) {
        const as = JSON.parse(user);
        setState({ ...state, user: as.user, token: as.token });
      }
    };
    fetchUser();
  }, []);

  return(
  <AuthContext.Provider value={{ state, setState }}>
    {children}
  </AuthContext.Provider>
  )
};

export  { AuthProvider ,AuthContext};
