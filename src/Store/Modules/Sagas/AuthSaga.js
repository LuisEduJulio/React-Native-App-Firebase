import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../Service/firebase';
import { SIGN_IN_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_OUT_REQUEST  } from '../ActionTypes';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export function* signIn({ payload }) {
  const navigation = useNavigation();
  console.log(payload);
  try {
    const { email, password } = payload;

    const response = yield call(firebase.login(email, password));
 
    yield put(SIGN_IN_SUCCESS(response.data));

    navigation.navigate('Main');

  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro na autenticação, verifique seus dados'
    );
    yield put(SIGN_IN_FAILURE());
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);