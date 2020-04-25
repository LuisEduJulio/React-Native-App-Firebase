import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Register from '../Screens/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator  
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
)

export default AuthRoutes;