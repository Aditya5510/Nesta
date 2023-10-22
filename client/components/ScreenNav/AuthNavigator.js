import { AuthProvider, AuthContext } from '../../context/auth';
import { NavigationContainer } from '@react-navigation/native';

import ScreenNav from './ScreenNav';

// const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <ScreenNav />
            </AuthProvider>
        </NavigationContainer>

    );
}

export default AuthNavigator;

