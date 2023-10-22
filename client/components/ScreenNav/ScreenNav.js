
import Signup from '../../pages/Signup';
import SignIn from '../../pages/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import { AuthContext, AuthProvider } from '../../context/auth';
import { useContext } from 'react';
import { useState } from 'react';
import Logout from './Logout';
import { Text } from '@kaloraat/react-native-text';


const Stack = createNativeStackNavigator();

function ScreenNav() {
    const { state, setState } = useContext(AuthContext)

    const authentication = state && state.token != "" && state.user != null;

    return (

        <Stack.Navigator initialRouteName="SignIn"
        // screenOptions={{ headerShown: false }}
        >

            {authentication ? (<Stack.Screen name="Home" component={Home} options={{
                title: "Future Predictor", headerRight: () => { <Logout /> }
            }} />) : (<>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </>)}

        </Stack.Navigator>


    );
}
export default ScreenNav;

