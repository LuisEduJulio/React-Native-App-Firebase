import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../Screens/Main';

const AppStack = createStackNavigator();

const AppRoutes = ({navigation}) => (
    <AppStack.Navigator>
        <AuthStack.Screen name="Main" component={Main}  />
    </AppStack.Navigator>
)

export default AppRoutes;