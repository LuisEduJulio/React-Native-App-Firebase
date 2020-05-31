import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../Store/Modules/Actions/CounterActions'
import { singOutResquest } from '../../Store/Modules/Actions/AuthActions';
import { Styles } from './styles';


function Main() {
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  const counter = useSelector(state => state.counter);
  

  function Add(){
    return dispatch(increment());
  }

  function Remove(){
    return dispatch(decrement());
  }

  function Logout(){
    return dispatch(singOutResquest());
  }

  return (
    <View style={Styles.View}>
        <View style={Styles.Header}>
        </View>
        
        <View style={Styles.Body}>         
          <View
            style={{marginTop: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 20}}
            >Texto</Text>
            <View
              style={{display: 'flex', flexDirection: 'row'}}
            >
              <TextInput
                value={data}
                onChangeText={(text) => setData(text)} 
                style={{ backgroundColor: '#DCDCDC', width: 60,  margin: 10 }}
              />
              <TouchableOpacity
                onPress={Add}
                style={{ backgroundColor: '#DCDCDC', fontWeight: 'bold', width: 60, margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              >
                <Text>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Remove}
                style={{ backgroundColor: '#DCDCDC', fontWeight: 'bold', width: 60, margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              >
                <Text>Enviar</Text>
              </TouchableOpacity>
            </View>
            <View>   
              <Text>Counter: {counter}</Text>
            </View>
            <View
              style={{marginTop: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <TouchableOpacity
                onPress={Logout}
              >
                <Text>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>        
    </View>
  );
}

export default Main;


