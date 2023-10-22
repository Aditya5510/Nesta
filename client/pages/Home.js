import React from 'react'
import Text from '@kaloraat/react-native-text'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { useState } from 'react'
import FooterNav from '../components/nav/FooterNav'
import { SafeAreaView } from 'react-native'
import Logout from '../components/ScreenNav/Logout'

const Home = () => {
  const { state, setState } = useContext(AuthContext)

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>

      <Text>{JSON.stringify(state, null, 4)}</Text>

      <FooterNav />
    </SafeAreaView>
  )
}

export default Home