import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


import {Styles} from './styles';
import { Button } from 'react-native-paper';

function Main() {
  const navigation = useNavigation();

  async function handleLogout(){
    await AsyncStorage.clear();
    navigation.navigate('Login')
  }
  
  return (
    <View style={Styles.View}>
        <View style={Styles.Header}>
          <Text style={Styles.Title}>Main</Text>
          <View style={Styles.Avatar}>
            <Avatar.Icon size={50} icon="folder" />
          </View>
        </View>
        
        <View style={Styles.Body}>
        <Card style={Styles.Card}>
         
          <View></View>
        </Card>
          
        </View>        
    </View>
  );
}

export default Main;