import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
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
        </View>
        <View style={Styles.Body}>
          <Button onPress={() => handleLogout}>
            Sair
          </Button>
        </View>        
    </View>
  );
}

export default Main;