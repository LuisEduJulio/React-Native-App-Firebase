import React, {useState, useRef, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import AuthContext from '../../Contexts/Auth'
import firebase from '../../Service/firebase'
import {Styles} from './styles';

function Login({navigation}) {
  const [form, setForm] = useState({email: '', password: ''});
  const passwordRef = useRef();
  const navigationTela = useNavigation();
  const [loading, setLoading] = useState(false);
  const { signed, Login } = useContext(AuthContext);

  console.log(signed);

  
  async function handleSignIn(e){
    e.preventDefault();
    
    const {email, password} = form;
    if(email === ' ' || password === ''){
      Alert.alert('Preencha seu dados!');
    }
    
    Login(email, password);
    
    try{
      await firebase.login(email, password)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

      const token = firebase.getCurrenttoken();
      AsyncStorage.setItem('token', JSON.parse(token));
      const Uid = firebase.getCurrentUid();
      AsyncStorage.setItem('uid', JSON.parse(Uid));

      const teste = AsyncStorage.getItem('token');
      console.log(teste);
      
      navigationTela.dispatch(
          CommonActions.reset({
          index: 1,
          routes: [
              { name: 'Main' },
          ],
          })
      );     
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