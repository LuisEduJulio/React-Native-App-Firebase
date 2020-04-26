import React, { useState, useRef } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import firebase from '../../Service/firebase'
import { Styles } from './styles';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nomeRef = useRef();
  const passwordRef  = useRef();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function onRegister(e){
    e.preventDefault();
    
    if(nome === '' || email === '' || password === ''){
      Alert.alert('Preencha seu dados!');
    }
    
    try{
      await firebase.register(nome, email, password)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      
      Alert.alert('Mensagen','Usuário cadastrado!');

      navigation.push('Login');

    }catch(error){
      console.log(error);
    }
  }

 
  return (
    <View style={Styles.View}>
        <View style={Styles.Input}>
          <TextInput
            label='Nome'
            mode='outlined'
            value={nome}
            onChangeText={setNome}
            returnKeyType='next'
            onSubmitEditing={() => nomeRef.current.focus()}
          />
          <TextInput
            style={Styles.InputValue}
            icon='email-outline'
            label='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            mode='outlined'
            value={email}
            onChangeText={setEmail}
            ref={nomeRef}
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
          />
           <TextInput
            style={Styles.InputValue}
            label='Senha'
            mode='outlined'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={onRegister}
          />
        </View>
        <View style={Styles.Button}>
          <Button onPress={() => navigation.push('Login')} style={Styles.ButtonSeparate}>
            Voltar
          </Button>
          <Button onPress={onRegister}>
            Cadastrar
          </Button>
          {loading && <ActivityIndicator size='small' color='blue' />}
        </View>
    </View>
  );
}

export default Register;