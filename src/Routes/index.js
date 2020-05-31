import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Main from '../Screens/Main';

const AuthStack = createStackNavigator();

 
function Routes(){
  return(    
    <AuthStack.Navigator  
        screenOptions={{
            headerShown: false
        }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Main" component={Main} />
      <AuthStack.Screen name="Register" component={Register} />   
    </AuthStack.Navigator>
  )
}

export default Routes;