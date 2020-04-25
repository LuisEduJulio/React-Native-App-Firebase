import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

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
    
    return (
        <AuthContext.Provider value={{ signed: !! user, user, Main }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;