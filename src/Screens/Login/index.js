import React, {useState, useRef } from 'react';
import { View, ActivityIndicator, AsyncStorage, Text, Alert } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import {Styles} from './styles';
import { useDispatch,  useSelector } from 'react-redux';
import { signInRequest } from '../../Store/Modules/Actions/AuthActions'

function Login({navigation}) {
  const [form, setForm] = useState({email: '', password: ''});
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  async function handleSignIn(e){
    e.preventDefault();
  
    const {email, password} = form;
    
    if(email === ' ' || password === ''){
      Alert.alert('Preencha seu dados!');
    }

    dispatch(signInRequest(email, password));    
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
            onSubmitEditing={handleSignIn}
          />
        </View>
        <View style={Styles.Button}>
  
          <Button onPress={handleSignIn} mode='contained' style={Styles.ButtonEnter}>
            Entrar
          </Button>
          {loading && <ActivityIndicator size='small' color='blue' />}
          <Button onPress={() => navigation.push('Register')} style={Styles.ButtonRegister}>
            Deseja cadastrar?
          </Button>
        </View>
    </View>
  );
}

export default Login;