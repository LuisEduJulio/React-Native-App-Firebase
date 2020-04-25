import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Styles} from './styles'


import Login from '../../Screens/Login';
import Main from '../../Screens/Main';
import Register from '../../Screens/Register';

const Tab = createMaterialBottomTabNavigator();
function Bottom() {
    return (
      <Tab.Navigator style={Styles.Bottom}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    );
}

export default Bottom;