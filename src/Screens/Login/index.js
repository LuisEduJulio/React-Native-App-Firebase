import React, {useState, useRef} from 'react';
import {View, Alert, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import firebase from '../../Service/firebase'
import {Styles} from './styles';

function Login() {
  const [form, setForm] = useState({email: '', password: ''});
  const passwordRef = useRef();
  const navigation = useNavigation();

  async function handleLogin(e){
    e.preventDefault();

    const {email, password} = form;
    if(email === ' ' || password === ''){
      Alert.alert('Preencha seu dados!');
    }
    
    try{
      await firebase.login(email, password);

      const token = firebase.getCurrenttoken();
      AsyncStorage.setItem('token', token);
      const Uid = firebase.getCurrentUid();
      AsyncStorage.setItem('uid', Uid);

      console.log(token);

      navigation.navigate('Main');
    
    }catch(error){
      Alert.alert(error.message);
    }

  }
  
  return (
    <View style={Styles.View}>
        <View style={Styles.Avatar}>
          <Avatar.Icon size={120} icon="account" />
        </View>
        <View style={Styles.Input}>
          <TextInput
            icon='email-outline'
            label='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            mode='outlined'
            value={form.email}
            onChangeText={(text) => setForm({...form, email: text })}
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
          />
           <TextInput
            icon='key'
            style={Styles.InputValue}
            label='Senha'
            mode='outlined'
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setForm({...form, password: text })}
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleLogin}
          />
        </View>
        <View style={Styles.Button}>
          <Button onPress={handleLogin} mode='contained' style={Styles.ButtonSeparate}>
            Entrar
          </Button>
          <Button onPress={() => navigation.push('Register')} mode='text' style={Styles.ButtonSeparate}>
            Deseja cadastrar?
          </Button>
        </View>
    </View>
  );
}

export default Login;