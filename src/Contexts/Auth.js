import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from '../../src/Service/firebase';

import Main from '../Screens/Main'


const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('uid');
            const storageToken = await AsyncStorage.getItem('token');

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            } else if (!storageUser && !storageToken) {
                setLoading(false);
            }
        }
        loadStorageData();
    }, [])


    async function Login(email, password){
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
        //navigation.navigate('Main');
        }catch(error){
        Alert.alert(error.message);
        }
    }
    
    return (
        <AuthContext.Provider value={{ signed: !! user, user, Main, Login }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;